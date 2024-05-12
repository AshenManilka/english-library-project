import {Injectable, OnInit} from '@angular/core';
import {SnackBarService} from "./snack-bar.service";
import {
  AngularFirestore,
  DocumentData
} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserBookDto} from "../dto/userBookDto";
import firebase from "firebase/compat/app";
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import {LoadingService} from './loading.service';
import firestore = firebase.firestore;


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private snackBarService: SnackBarService,
    private fireStoreService: AngularFirestore,
    private loadingService: LoadingService
  ) {

  }

  deleteExpiredUserBooksByIds(ids: string[]) {
    ids.forEach(id => {
      this.fireStoreService.collection("UsersBooks").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    });
  }

  getAllExpiredUsersBooks(): Observable<any[]> {
    const currentDate = new Date();
    const formattedCurrentDate = currentDate.toISOString().slice(0, 10);
    return this.fireStoreService
      .collection("UsersBooks", (ref) =>
        ref.where("accessType", "in", ["shortTimeSubscriber", "yearlySubscriber"])
          .where("endDate", "<", formattedCurrentDate)
      )
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions
            .map(a => ({ id: a.payload.doc.id, ...a.payload.doc.data() as any }))
            .filter(doc => doc.endDate < formattedCurrentDate);
        })
      );
  }
  // deleteExpiredUserBooksByIds(ids: string[]) {
  //   ids.forEach(id => {
  //     console.log("Document ID to be deleted:", id);
  //   });
  // }

  getAllBooks(): Observable<any[]> {
    return this.fireStoreService.collection('Books', ref =>
      ref
        .orderBy('bookCategory',)
        .orderBy('bookName', 'asc')
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => ({id: a.payload.doc.id, ...a.payload.doc.data() as any})))
    );
  }

  addPermissions(
    id: string,
    bookId: string,
    accessType: string,
    startDate: Date,
    endDate: Date
  ) {
    const userBookDto: UserBookDto = {
      userId: id,
      bookId: bookId,
      accessType: accessType,
      startDate: startDate,
      endDate: endDate,
      createdAt: firestore.FieldValue.serverTimestamp()
    };
    return this.createUserPermission(userBookDto, id)
  }

  private async createUserPermission(userBookDto: UserBookDto, userEmail: string): Promise<void> {
    const userId = userBookDto.userId;
    const bookId = userBookDto.bookId;
    const userBookQuerySnapshot = await this.fireStoreService.collection("UsersBooks", ref =>
      ref.where("userId", "==", userId).where("bookId", "==", bookId)).get().toPromise();

    if (userBookQuerySnapshot && !userBookQuerySnapshot.empty) {
      this.snackBarService.snackBar("Permission already granted for this user and book.", "close", 5000, 'ltr', 'center', 'top');
      this.loadingService.hideLoading();
      return;
    }

    const userQuerySnapshot = await this.fireStoreService.collection("Users", ref => ref.where("email", "==", userEmail)).get().toPromise() as QuerySnapshot<DocumentData>;
    if (!userQuerySnapshot.empty) {
      if (userBookDto.accessType !== "lifeTimeSubscriber") {
        if (userBookDto.startDate !== userBookDto.endDate) {
          await this.fireStoreService.collection("UsersBooks").doc().set(userBookDto);
          this.snackBarService.snackBar("Permission Granted", "close", 5000, 'ltr', 'center', 'top');
          this.loadingService.hideLoading();
        } else {
          this.snackBarService.snackBar("Please Select The End Date", "close", 5000, 'ltr', 'center', 'top');
          this.loadingService.hideLoading();
        }
      } else {
        await this.fireStoreService.collection("UsersBooks").doc().set(userBookDto);
        this.snackBarService.snackBar("Permission Granted", "close", 5000, 'ltr', 'center', 'top');
        this.loadingService.hideLoading();
      }
    }
  }

  async updateUserSubscription(email: string, subscriptionType: 'yearlySubscriber' | 'lifeTimeSubscriber' | 'shortTimeSubscriber', paymentDate: Date, paymentAmount: any) {
    try {
      this.loadingService.showLoading();
      const userQuerySnapshot = await this.fireStoreService.collection("Users", ref => ref.where("email", "==", email)).get().toPromise() as QuerySnapshot<DocumentData>;

      if (!userQuerySnapshot.empty) {
        const batch = this.fireStoreService.firestore.batch();

        for (const userDoc of userQuerySnapshot.docs) {
          const userData = userDoc.data();
          const currentPayment = parseFloat(userData['payment']) || 0;
          const updatedPayment = currentPayment + parseFloat(paymentAmount);

          const subscriberKey = subscriptionType === 'yearlySubscriber' ? 'yearlySubscriber' :
            subscriptionType === 'lifeTimeSubscriber' ? 'lifeTimeSubscriber' : 'shortTimeSubscriber';
          const updateData: any = { ...userData };
          updateData[subscriberKey] = true;
          updateData.paymentDate = paymentDate;
          updateData.payment = updatedPayment;

          batch.update(userDoc.ref, updateData);
        }
        await batch.commit();
        this.snackBarService.snackBar("Access Successfully Updated", "close", 5000, 'ltr', 'center', 'top');
      } else {
        this.snackBarService.snackBar("Check The E-Mail Address", "close", 5000, 'ltr', 'center', 'top');
      }
    } catch (error) {
      console.error('Error updating user subscription:', error);
      this.snackBarService.snackBar("Error Updating The User Access", "close", 5000, 'ltr', 'center', 'top');
    } finally {
      this.loadingService.hideLoading();
    }
  }


  getAllUsersBooks(): Observable<any[]> {
    return this.fireStoreService.collection('UsersBooks', ref => ref.orderBy('userId'))
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...(data as any)};
          });
        })
      );
  }

  getAllDataByEmail(email: any) {
    return this.fireStoreService.collection("UsersBooks", ref =>
      ref.where("userId", "==", email)
    ).snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...(data as any)};
          });
        })
      );
  }

  getAllBooksByBookIdsAndCategory1(bookIds: any[], category: any): Observable<any[]> {
    return this.fireStoreService.collection("Books", ref => ref
      .orderBy('bookName')
      .where('bookId', 'in', bookIds)
      .where("bookCategory", "==", category)
    )
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...(data as any)};
          });
        })
      );
  }


  deleteAccess(uid: any) {
    this.fireStoreService.collection("UsersBooks").doc(uid).delete().then(r => {
      this.loadingService.hideLoading();
      this.snackBarService.snackBar("Access Removed Successfully", "close", 5000, 'ltr', 'center', 'top');
    });
  }

  getAllUsersBooksByEmail(userId: any) {
    return this.fireStoreService.collection('UsersBooks', ref =>
      ref.where('userId', '>=', userId)
        .where('userId', '<=', userId + '\uf8ff')
        .orderBy('userId')
    )
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return {id, ...(data as any)};
          });
        })
      );
  }
}

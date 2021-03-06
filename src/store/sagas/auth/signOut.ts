import FirebaseFactory from 'src/app/lib/firebase';
import { takeEvery, call, put, ForkEffect } from 'redux-saga/effects';
import { constants, actions } from 'src/store/definitions/auth';

function* handleSignOut() {
  const { rsf, analytics } = yield FirebaseFactory.get();

  try {
    yield call(rsf.auth.signOut);
    yield put(actions.signOutSuccess());
    try {
      analytics.logEvent('User sign out');
    } catch (ae) {
      console.log(ae);
    }
  } catch (error) {
    console.log('Error:', error);
    yield put(actions.signOutFailure());
    throw new Error(error);
  }
}

/**
 * Listen for the sign out action
 */
export default function* root(): IterableIterator<ForkEffect> {
  yield takeEvery(constants.SIGN_OUT_REQUESTED, handleSignOut);
}

import test from 'ava';
import sinon from 'sinon';
import Deadpool from '../Deadpool';

test('Test Deadpool class', t => {
  const stub = sinon.stub(console, 'log');
  const dp = new Deadpool();
  dp.sayHello();
  stub.restore();
  t.true(stub.calledOnce);
  t.true(stub.firstCall.calledWithExactly('Who? Me? I\'m Dead Pool ;)'));
});

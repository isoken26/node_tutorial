const events = require('events');
const eventEmitter = new events.EventEmitter();

// イベントハンドラーの作成
const myEventHandler = () => { 
    console.log('I hear a scream');
}

// イベントハンドラをイベントに割りあてる
eventEmitter.on('scream', myEventHandler);

//'scream'イベントを発火する
eventEmitter.emit('scream');
(function() {
    'use strict';

  var app = WinJS.Application;
  var activation = Windows.ApplicationModel.Activation;

  app.onactivated = function (args) {
    if (args.detail.kind === activation.ActivationKind.launch) {
      if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
        // TODO: это приложение только что запущено. Инициализируйте здесь свое приложение.
      } else {
        // TODO: это приложение было повторно активировано из приостановленного состояния.
        // Место для восстановления состояния приложения.
      }

      //AppBar
      WinJS.Namespace.define("Sample", {
          outputCommand: WinJS.UI.eventHandler(function (ev) {
              var command = ev.currentTarget;
              if (command.winControl) {
                  var label = command.winControl.label || command.winControl.icon || "button";
                  var section = command.winControl.section || "";
              }
          })
      });

      args.setPromise(WinJS.UI.processAll().then(function() {
          // TODO: место для кода.

          //SplitView
          var object = new WinJS.UI.SplitView();

         



      }));
    }
  };

  app.oncheckpoint = function (args) {
    // TODO: действие приложения будет приостановлено. Сохраните здесь все состояния, которые понадобятся после приостановки.
    // Вы можете использовать объект WinJS.Application.sessionState, который автоматически сохраняется и восстанавливается после приостановки.
    // Если вам нужно завершить асинхронную операцию до того, как действие приложения будет приостановлено, вызовите args.setPromise().
  };

  app.start();
}());

import consumer from "./consumer"
import toastr from 'toastr'
import $ from 'jquery'

consumer.subscriptions.create("PostChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("estoy conectado")
  },

  disconnected() {
  },

  received(data) {
    var dato = $('#nuevo')
    dato.append(data.post)

    toastr.success(data.title, "Post Nuevo")
  }
});

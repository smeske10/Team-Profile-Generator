var modal = document.getElementById('modal')
var input = document.getElementById('input')

modal.addEventListener('shown.bs.modal', function () {
  input.focus()
})
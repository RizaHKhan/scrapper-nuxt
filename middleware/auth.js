export default function (context) {
  if (!context.store.state.user.token) {
    context.redirect('/')
  }
}

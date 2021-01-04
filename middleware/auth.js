export default (context) => {
    let authToken = context.app.$cookies.get('authToken');
    if (authToken == null) {
      // error({
      //   message: 'You are not connected',
      //   statusCode: 403
      // })
      return context.redirect('/')
    }
  }
  
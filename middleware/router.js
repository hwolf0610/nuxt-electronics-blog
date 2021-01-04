export default function ({ route, redirect }) {

  if (route.fullPath === "/") {
    return redirect('/home')
  }
  if (route.fullPath === "/user/settings") {
    return redirect('/user/settings/general')
  }
  if (route.fullPath === "/user/blog") {
    return redirect('/user/blog/list')
  }
  if (route.fullPath === "/user/cart") {
    return redirect('/user/cart/overview')
  }
  if (route.fullPath === "/user/order-tracking") {
    return redirect('/user/order-tracking/making-product')
  }
  if (route.fullPath === "/user/pro") {
    return redirect('/user/pro/electronics')
  }
}

let scrollCallback = function(callback, el) {
  if(el.scrollHeight < el.clientHeight) {
    return ;
  }
  if(el.scrollTop + el.clientHeight === el.scrollHeight){
    callback();
  }
}
let callBackWarpped;
export default {
  bind: function(el, binding) {
    callBackWarpped = scrollCallback.bind({}, binding.value, el);
    window.addEventListener("scroll", callBackWarpped, true)
  },
  unbind: function() {
    window.removeEventListener("scroll", callBackWarpped, true)
  }
}

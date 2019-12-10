/**
 * @author by oksite
 */
module.exports = {
  /**
   * 
   * @param {*} name 
   */
  get:function(name){
    return localStorage.getItem(name)
  },
  /**
   * 
   * @param {*} name 
   * @param {*} obj 
   */
  set:function(name,obj){
    return localStorage.setItem(name,obj)
  },
  /**
   * 
   * @param {*} key 
   */
  remove:function(key){
    return localStorage.removeItem(key)
  },
  clear:function(){
    return localStorage.clear()
  }
}

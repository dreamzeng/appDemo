;(function(undefined){
	if(String.prototype.trim === undefined)
	String.prototype.trim = function(){
		return this.replace(/^\s+|\s+$/g,'')
	}	

	if(Array.prototype.reduce === undefined) Array.prototype.reduce = function(fun){
		if(this === void 0 || this === null)throw new TypeError()
		var t = Object(this),
	      len = t.length >>> 0,
	        k = 0,
	        accumulator
	    if(typeof fun != 'function') throw new TypeError()
	    if(len == 0 && arguments.length ==1) throw new  TypeError()
	    //取初始值
	    if(arguments.length >= 2) accumulator = arguments[1]
	    else do{
	    	if(k in t){
	    		accumulator = t[k++]
	    		break
	    	}
	    	if(++k >= len) throw new TypeError()
	    }while(true)
     	//遍历数组，将前一次的结果传入处理函数进行累计处理
     	while(k < len){
     		if(k in t) accumulator = fun.call(undefined,accumulator,t[k],k,t)
     		k++
     	}
     	return accumulator
	}

})();

var Zepto = (function(){
	var undefined,key,$,classList,emptyArray =[],
	  slice = emptyArray.slice,
	  filter =emptyArray.filter,
	  document = window.document,
	  elementDisplay = {},classCache ={},
	  getComputedStyle = document.defaultView.getComputedStyle,
	  //设置CSS时，不用加px单位的属性
	  cssNumber = {
	  	'column-count':1,
	  	'columns':1,
	  	'font-weight':1,
	  	'line-height':1,
	  	'opacity':1,
	  	'z-index':1,
	  	'zoom':1
	  },
	  //HTML代码片断的正则
	  fragmentRE = /^\s*<(\w+|!)[^>]*/,
	  //匹配非单独一个闭合标签的标签，类似将<div></div>写成了<div/>
	  tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	  //根节点
	  rootNodeRE = /^(?:body|html)$/i,
	  //需要提供get和set的方法名
	  // special attributes that should be get/set via method calls
	  methodAttributes = ['val'，'css','html','text','data','width','height','offset'],
	  //相邻节点的一些操作
	  adjacencyOperators = ['after','prepend','before','append'],
	  table = document.createElement('table'),
	  tableRow = document.createElement('tr'),
	  //这里的用途是当需要给tr,tbody,thead,tfoot,td,th设置innerHTMl的时候，需要用其父元素作为容器来装载HTML字符串
       containers = {
       	'tr' : document.createElement('tbody'),
       	'tbody': table,
       	'thead': table,
       	'tfoot': table,
       	'td':tableRow,
       	'th':tableRow,
       	'*':document.createElement('div')
       },
       //当DOM ready的时候，document会有以下三种状态的一种
       readyRE = /complete|loaded|interactive/,
       //class选择器的正则
       classSelectorRE = /^\.([\w-]+)$/,
       //id选择器的正则
       idSelectorRE = /^#([\w-]*)$/,
       //DOM标签正则
       tagSelectorRE = /^[\w-]+$/,


})
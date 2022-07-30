var i =0 
function _click(self){
    let _view = document.getElementById('view').children
    let _span = document.createElement('span')
    // console.log(_view.length)
    if(self.getAttribute('data-sign') == '='){
        i++
        // console.log(i)
        f1=Number(_view[0].innerHTML) 
        f3=Number(_view[2].innerHTML)
        // console.log(_view[1].innerHTML)
        if(_view[1].innerHTML=='*'){
            s=(f1*f3)
            // console.log(s)
            _span.innerHTML=s
            _insert(_span , i)
            document.getElementById('view').innerHTML=''
            document.getElementById('view').appendChild(_span)
        }else if(_view[1].innerHTML=='/'){
            s=(f1/f3)
            _span.innerHTML=s
            _insert(_span , i)
            document.getElementById('view').innerHTML=''
            document.getElementById('view').appendChild(_span)
        }else if(_view[1].innerHTML=='-'){
            s=(f1-f3)
            _span.innerHTML=s
            _insert(_span , i)
            document.getElementById('view').innerHTML=''
            document.getElementById('view').appendChild(_span)
        }else{
            s=(f1+f3)
            _span.innerHTML=s
            _insert(_span , i)
            document.getElementById('view').innerHTML=''
            document.getElementById('view').appendChild(_span)
        }
}else if(_view.length>3){
    }else{
        if(self.getAttribute('data-status')=='off'){
            if(self.getAttribute('data-sign') == 'DEL'){
                if(document.getElementById('view').lastChild.innerHTML==''){
                    document.getElementById('view').lastChild.remove()
                }
                let a =document.getElementById('view').lastChild.innerHTML.length
               s = document.getElementById('view').lastChild.innerHTML
               l=s.substr(0 , a-1)
               document.getElementById('view').lastChild.innerHTML=l
            //    remove(l)
            //    console.log(s)
            //    console.log(l)
            }else if(self.getAttribute('data-sign') == 'C'){
                document.getElementById('view').innerHTML=''
            }else if(self.getAttribute('data-sign') == 'CE'){
              z =  document.getElementById('view').lastChild.remove()
              console.log(z)
            }else if(_view.length>0){
                if(
                    document.getElementById('view').lastChild.innerHTML=='+' ||
                    document.getElementById('view').lastChild.innerHTML=='-' ||
                    document.getElementById('view').lastChild.innerHTML=='*' ||
                    document.getElementById('view').lastChild.innerHTML=='/'
                    ){
                        if(self.getAttribute('data-sign') == '%'){
                            let f = document.getElementById('view').firstChild.innerHTML
                         //    console.log(f)
                            let m =0
                            if(document.getElementById('view').lastChild.innerHTML=='+' ){
                             m=((f*f)*0.01)
                            }else if(document.getElementById('view').lastChild.innerHTML=='-'){
                             m=((f*f)*0.01)
                            }else if(document.getElementById('view').lastChild.innerHTML=='*'){
                             m=(f*0.01)
                            }else{
                             m=(f*0.01)
                            }
                            _span.innerHTML=m
                            document.getElementById('view').appendChild(_span)

                        }else if( self.getAttribute('data-sign') == '+/-'){
                            let f = document.getElementById('view').firstChild.innerHTML
                            let m =0
                            m=(f*(-1))
                            _span.innerHTML=m
                            document.getElementById('view').appendChild(_span)
                        }else if(self.getAttribute('data-sign') == '|x'){
                            let f = Number(document.getElementById('view').firstChild.innerHTML)
                            let m =0
                            m=Math.sqrt(f)
                            _span.innerHTML=m
                            document.getElementById('view').appendChild(_span)
                        }else if(self.getAttribute('data-sign') == 'x*2'){
                            let f = document.getElementById('view').firstChild.innerHTML
                            let m =0
                            m=(f**2)
                            _span.innerHTML=m
                            document.getElementById('view').appendChild(_span)
                        }else if(self.getAttribute('data-sign') == '1/x'){
                            let f = document.getElementById('view').firstChild.innerHTML
                            let m =0
                            m=(1/(f))
                            _span.innerHTML=m
                            document.getElementById('view').appendChild(_span)
                        }
                    }else{
                        if(self.getAttribute('data-sign') == '%'){
                    
                        }else if(self.getAttribute('data-sign') == '|x'){
                            let last = Number(document.getElementById('view').lastChild.innerHTML)
                            document.getElementById('view').lastChild.innerHTML=Math.sqrt(last)
                        }else if(self.getAttribute('data-sign') == 'x*2'){
                            let last = document.getElementById('view').lastChild.innerHTML
                            document.getElementById('view').lastChild.innerHTML=(last**2)
                        }else if(self.getAttribute('data-sign') == '1/x'){
                           let last = document.getElementById('view').lastChild.innerHTML
                           document.getElementById('view').lastChild.innerHTML=(1/(last))

                        } else if( self.getAttribute('data-sign') == '+/-'){
                                let lst = document.getElementById('view').lastChild.innerHTML
                                s=(lst * (-1))
                                // console.log(lst)
                                document.getElementById('view').lastChild.innerHTML=s
                            } else if(self.getAttribute('data-sign') == '.'){
                            if(document.getElementById('view').lastChild.innerHTML.includes('.')){
                            }else{
                                let adad = self.getAttribute('data-sign')
                                let last = document.getElementById('view').lastChild.innerHTML
                                document.getElementById('view').lastChild.innerHTML=last+adad
                            }
                        }else if(_view.length<=3){
                            if(_view.length==3){
                                i++
                                // console.log(i)
                                if(self.getAttribute('data-f') == 'd'){
                                        f1=Number(_view[0].innerHTML)
                                        f3=Number(_view[2].innerHTML)
                                        if(_view[1].innerHTML=='*'){
                                            s=(f1*f3)
                                            // console.log(s)
                                            _span.innerHTML=s
                                            _insert(_span , i)
                                            document.getElementById('view').innerHTML=''
                                            document.getElementById('view').appendChild(_span)
                                        }else if(_view[1].innerHTML=='/'){
                                            n=(f1/f3)
                                            _span.innerHTML=n
                                            _insert(_span , i)
                                            document.getElementById('view').innerHTML=''
                                            document.getElementById('view').appendChild(_span)
                                        }else if(_view[1].innerHTML=='-'){
                                            n=(f1-f3)
                                            _span.innerHTML=n
                                            _insert(_span , i)
                                            document.getElementById('view').innerHTML=''
                                            document.getElementById('view').appendChild(_span)
                                        }else{
                                            n=(f1+f3)
                                            _span.innerHTML=n
                                            _insert(_span , i)
                                            document.getElementById('view').innerHTML=''
                                            document.getElementById('view').appendChild(_span)
                                        }
                                        _span1=document.createElement('span')
                                        _span1.innerHTML=self.getAttribute('data-sign')
                                        document.getElementById('view').appendChild(_span1)
                                    }  
                           }else if(self.getAttribute('data-f') == 'd'){
                                let adad = self.getAttribute('data-sign')
                                _span.innerHTML=adad
                                document.getElementById('view').appendChild(_span)
                            }
                        }
                    }
            }
        }else{ 
            if(self.getAttribute('data-status')=='on'){
                let adad = self.getAttribute('data-sign')
                // console.log(adad)
                if(_view.length==0){
                   _span.innerHTML=adad
                   document.getElementById('view').appendChild(_span)
                }
                else {
                    if(
                        document.getElementById('view').lastChild.innerHTML=='+' ||
                        document.getElementById('view').lastChild.innerHTML=='-' ||
                        document.getElementById('view').lastChild.innerHTML=='*' ||
                        document.getElementById('view').lastChild.innerHTML=='/' 
                    )
                    {
                         _span.innerHTML=adad
                         document.getElementById('view').appendChild(_span)
    
                    }else{
                       let last = document.getElementById('view').lastChild.innerHTML
                       document.getElementById('view').lastChild.innerHTML=last + adad
                    }
                }
            }
        }
    }
}
function _closeh(){
    document.querySelector('#main>section').style.height=0
    document.getElementById('view').style.filter='blur(0px)'
}
function _openh(){
    document.querySelector('#main>section').style.height='100%'
    document.getElementById('view').style.filter='blur(3px)'
}
function _clearh(){
    let _p=document.createElement('p')
    _p.innerHTML='There is no history yet'
    document.querySelector('#main>section>div').innerHTML=''
    document.querySelector('#main>section>div').appendChild(_p)
    i =0
}
function _insert(x , y){
    if(document.querySelector('#main>section>div').children.length=='1'){
        if(document.querySelector('#main>section>div').children[0].innerHTML=='There is no history yet')
        document.querySelector('#main>section>div').innerHTML=''
        }
    let s = y
    let _span1 = document.createElement('span')
    let _view = document.getElementById('view').children
    n1=_view[0]
    n2=_view[1]
    n3=_view[2]
    let _span2 = document.createElement('span')
    let _span3 = document.createElement('span')
    _span2.innerHTML='='
    _span3.innerHTML=x.innerHTML
    document.querySelector('#main>section>div').appendChild(_span1)
    document.querySelector('#main>section>div>span:nth-of-type('+s+')').addEventListener('click' , Myfunction)
    document.querySelector('#main>section>div>span:nth-of-type('+s+')').appendChild(n1)
    document.querySelector('#main>section>div>span:nth-of-type('+s+')').appendChild(n2)
    document.querySelector('#main>section>div>span:nth-of-type('+s+')').appendChild(n3)
    document.querySelector('#main>section>div>span:nth-of-type('+s+')').appendChild(_span2)
    document.querySelector('#main>section>div>span:nth-of-type('+s+')').appendChild(_span3)
}
function Myfunction(){
   var m =document.querySelector('#main>section>div>span').children
       document.getElementById('view').innerHTML=''
       m1 = m[0]
       m2 = m[1]
       m3 = m[2]
       document.getElementById('view').appendChild(m1)
       document.getElementById('view').appendChild(m2)
       document.getElementById('view').appendChild(m3)
       let f =document.querySelector('#main>section>div>span')
       document.querySelector('#main>section>div').removeChild(f)
       i--
       if(document.querySelector('#main>section>div').children.length==0){
        _clearh()
       }
}



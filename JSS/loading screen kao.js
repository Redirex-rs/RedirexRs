  let progress = document.getElementById('progress');
    
    var queue = new createjs.LoadQueue(false);
 
    queue.on('progress', event => {
        let progress = Math.floor(event.progress * 100);
        this.progress.style.width = progress+'%';
        if (progress == 100) {
            console.log('all done');
            document.querySelector('body').style.background = 'white'
        }
    })
    queue.on('complete', event => {
        gallery.classList.add('fadeIn');
        setTimeout(() => {
            progress.classList.add('expand');
        },500)

    })
   

    function handleFileComplete(event) {
       
     var item = event.item; // A reference to the item that was passed in to the LoadQueue
     var type = item.type;

     // Add any images to the page body.
     if (type == createjs.Types.IMAGE) {
        gallery.appendChild(event.result);
         
     }

    }
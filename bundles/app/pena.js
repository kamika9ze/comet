function updatePopupLink(id){
    console.log(id);
    let iframe = document.querySelector('.popup[data-popup-name="video"] iframe');
    let str = iframe.src;
    iframe.src=str.split('?')[0].split('embed')[0]+'embed/'+id+'?'+str.split('?')[1]
}
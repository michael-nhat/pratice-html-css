let btnComment =$(".body .post-card .buttons .btn-comment");
let btnComment2 = $(".body .post-card .buttons > *");
console.log(btnComment2);
console.log("wtf");
btnComment2.click(function() {
    let commentBox = $(".body .post-card .comment-box .comment-box--input-box");
    commentBox.focus();
});

let commentInput = $(".body .post-card .comment-box .comment-box--input-box");
commentInput.keyup(function(e) {
    if (e.keyCode == 13) {
        $(this).trigger("enterKey");
    }
});
commentInput.bind("enterKey", function(e) {
//     console.log(`
// 1
// 2
// `); // This work! Output has 2 line
    let userName="Nhat Hoang";
    let commentContent =this.value;
    $( ".body .post-card .comment-section" ).append(`
                        <div class="comment-item">
                            <div class="comment-item--avatar avatar-style"><img alt="" src="./logo_meet.png"/></div>
                            <div class="comment-item--content">
                                <div class="comment-item--author">${userName}</div>
                                <div class="comment-item--content">${commentContent}</div>
                                <div class="comment-item--bottom-bar">
                                    <div class="comment-item--buttons">
                                        <div class="comment-item--btn-like">Thích</div>
                                        <div class="comment-item--btn-reply">Phản hồi</div>
                                        <div class="comment-item--btn-share">Chia sẻ</div>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-item--more">...</div>
                        </div>
`);
    this.value = "";
});




// click seem activate all chilrent element because of *
// fas fa - thumbs - up
// main.js: 6 btn - like
// main.js: 6 fas fa - thumbs - up
// main.js: 6 btn -like

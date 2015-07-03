  $(function() {

  // form to create new blog post
  var $newPost = $('#new-post');

  // element to hold our list of blog posts
  var $toDoList = $('#blog-list');

  // submit form to create new todo
  $newPost.on('submit', function(event) {
    event.preventDefault();

    // create new todo object from form data
    var postDesc = $('#post-desc').val();
    var postAuthor = $('#post-author').val();

	});

};
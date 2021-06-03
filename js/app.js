const blogs = [];
var blogsContainer = document.getElementById('blogs-container');

function card(title, article, image) {
	return `
      <div class="card margin10" style="width: 18rem;">
        <img class="card-img-top" src="${image}">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${article}</p>
          <span class="badge badge-primary">by Zainab</span>
        </div>
      </div>
  `;
}

$(function() {
	$('#header').load('header.html');
	$('#article').val(''); // to clear text area on refresh
	$('#submit').click(function() {
		var title = document.getElementById('title').value;
		var article = document.getElementById('article').value;
		var image = document.getElementById('image').value;
		if (title.length > 0 && article.length > 0) {
			blogs.push({
				title: title,
				article: article,
				image: image
			});
			blogsContainer.innerHTML = blogsContainer.innerHTML + card(title, article, image);
		} else {
			alert('Please fill out required fields');
		}
	});
});

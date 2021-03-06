$(document)
.ready(function(){    
    turnOnClock();

    $('#textInput').on('click', function(){
		addTextInput();
	});
    
    $('#passwordInput').on('click', function(){
		addPasswordInput();
	});
   
    $('#emailInput').on('click', function(){
		addEmailInput();
	});
    
    $('.category').on('click', function(){
        var category = $(this).data('category');
        const url = '/products/' + category;
        $.ajax({
            url: url,
            type: 'GET',
            success: function(data){ window.location.href=url; },
            error: function(err){ console.log(err); }
        });
    });
    
    $('.product').on('click', function(){
        var id = $(this).data('id');
        var url = '/product/' + id;
        $.ajax({
            url:url,
            type:'GET',
            success:function(data){window.location.href=url;},
            error:function(err) { console.log(err);}
        });
    });
    
    $('.delete-product').on('click', function(){
        var url = $(this).data('url');
        $.ajax({
            url:url,
            type:'delete',
            success: function(data) {window.location.href=url;},
            error: function(err) {console.log(err);}
        });
    });
})
.foundation()

function addTextInput() {
	var divParent = newElement('div'),
		span = newElement('span'),
        italic = newElement('i'),
		remove = newElement('span'),
        italicRemove = newElement('i'),
		input = newElement('input');

	var count = childCount(element('reg-form')) + 1,
        name = 'input' + count;
        
    if (confirm('Do you want to name the input?')) {
        var newName = prompt('Enter input name');
        if (newName.length) {
            name = newName;
        }
    }
    
    /*
    
        <div class="input-group" >
            <span class="input-group-label"><i class="fi-pencil"></i></span>
            <input class="input-group-field" type="text" placeholder="Name">
        </div>
    */

	addAttribute('class', 'input-group', divParent);
	addAttribute('class', 'input-group-label', span);
    addAttribute('class', 'fi-pencil', italic);
    
    addAttribute('class', 'input-group-field', input);
	addAttribute('placeholder', cfc(name), input);
    addAttribute('type', 'text', input);
    addAttribute('id', name, input);
    
	addAttribute('class', 'input-group-label', remove);
    addAttribute('class', 'fi-x', italicRemove);
    
	addAttribute('name', name, input);

	addHandler(remove, 'click', function() {
		element('reg-form').removeChild(divParent);
	});
    
    $(italic).appendTo(span);    
    $(italicRemove).appendTo(remove);
    $(span).appendTo(divParent);
    $(input).appendTo(divParent);
    $(remove).appendTo(divParent);
	$(divParent).appendTo('.registration-form');
}

function addPasswordInput() {
    var divParent = newElement('div'),
		span = newElement('span'),
        italic = newElement('i'),
		remove = newElement('span'),
        italicRemove = newElement('i'),
		input = newElement('input');

	var count = childCount(element('reg-form')) + 1,
        name = 'input' + count;
        
    if (confirm('Do you want to name the input?')) {
        var newName = prompt('Enter input name');
        if (newName.length) {
            name = newName;
        }
    }
    
    /*
    
        <div class="input-group" >
            <span class="input-group-label"><i class="fi-pencil"></i></span>
            <input class="input-group-field" type="text" placeholder="Name">
        </div>
    */

	addAttribute('class', 'input-group', divParent);
	addAttribute('class', 'input-group-label', span);
    addAttribute('class', 'fi-lock', italic);
    
    addAttribute('class', 'input-group-field', input);
	addAttribute('placeholder', cfc(name), input);
    addAttribute('type', 'password', input);
    addAttribute('id', name, input);
    
	addAttribute('class', 'input-group-label', remove);
    addAttribute('class', 'fi-x', italicRemove);
    
	addAttribute('name', name, input);

	addHandler(remove, 'click', function() {
		element('reg-form').removeChild(divParent);
	});
    
    $(italic).appendTo(span);    
    $(italicRemove).appendTo(remove);
    $(span).appendTo(divParent);
    $(input).appendTo(divParent);
    $(remove).appendTo(divParent);
	$(divParent).appendTo('.registration-form');
}

function addEmailInput() {
	var divParent = newElement('div'),
		span = newElement('span'),
        italic = newElement('i'),
		remove = newElement('span'),
        italicRemove = newElement('i'),
		input = newElement('input');

	var count = childCount(element('reg-form')) + 1,
        name = 'input' + count;
        
    if (confirm('Do you want to name the input?')) {
        var newName = prompt('Enter input name');
        if (newName.length) {
            name = newName;
        }
    }
    
    /*
    
        <div class="input-group" >
            <span class="input-group-label"><i class="fi-pencil"></i></span>
            <input class="input-group-field" type="text" placeholder="Name">
        </div>
    */

	addAttribute('class', 'input-group', divParent);
	addAttribute('class', 'input-group-label', span);
    addAttribute('class', 'fi-mail', italic);
    
    addAttribute('class', 'input-group-field', input);
	addAttribute('placeholder', cfc(name), input);
    addAttribute('type', 'email', input);
    addAttribute('id', name, input);
    
	addAttribute('class', 'input-group-label', remove);
    addAttribute('class', 'fi-x', italicRemove);
    
	addAttribute('name', name, input);

	addHandler(remove, 'click', function() {
		element('reg-form').removeChild(divParent);
	});
    
    $(italic).appendTo(span);    
    $(italicRemove).appendTo(remove);
    $(span).appendTo(divParent);
    $(input).appendTo(divParent);
    $(remove).appendTo(divParent);
	$(divParent).appendTo('.registration-form');
}

function turnOnClock() {
    interval = doInterval(dateTime,1);
}

function dateTime() {
	elements().clock.innerHTML = stamp();
}

function elements() {
	return {
		clock:element('clock')
	};
}

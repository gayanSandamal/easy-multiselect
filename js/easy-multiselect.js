
function itemSelect() {
    $(event.target).toggleClass('selected');
}
function view_transfered_items() {
    var transferedItems = $('.multiselect-right > div').text();
    var multiselect_right_items = $('.multiselect-right > div');
    var multiselect_right_items_count = multiselect_right_items.length;

    if (multiselect_right_items_count > 0) {
        var selectedTexts = [];
        $('.multiselect-content.multiselect-right').find('.item.selected').each(function () {
            var selected_text = $(this).text();
            selectedTexts.push(selected_text);
        });
        var obj = JSON.stringify(selectedTexts);
//                    var stringify = JSON.parse(obj);
        alert(obj);
    }

}
function addItems() {
    var addField = $('#add-field');
    var addfleidText = addField.val();

    var appendableItem = ('<div class="item" onclick="itemSelect(this)">' + addfleidText + '</div>');

    addField.val('');
    addField.focus();
    if (addfleidText.length > 0) {
        $('.multiselect-left').append(appendableItem);
    }
}
function toRight() {
    if ($(".multiselect-left > div").hasClass("selected")) {
        var fromItem = $('.multiselect-left > .selected');
        $('.multiselect-right').append(fromItem);
        $('.multiselect-right > div').removeClass('selected');
        $('.multiselect-left > .selected').remove();
    }
}
function toLeft() {
    if ($(".multiselect-right > div").hasClass("selected")) {
        var fromItem = $('.multiselect-right > .selected');
        $('.multiselect-left').append(fromItem);
        $('.multiselect-left > div').removeClass('selected');
        $('.multiselect-right > .selected').remove();
    }
}
function toRightAll() {
    var fromItem = $('.multiselect-left > .item');
    $('.multiselect-right').append(fromItem);
    $('.multiselect-left > .selected').remove();
}
function toLeftAll() {
    var fromItem = $('.multiselect-right > .item');
    $('.multiselect-left').append(fromItem);
    $('.multiselect-right > .selected').remove();
}
$(document).ready(function () {
    $('.multiselect-content > div').attr('class', 'item');
    $('#view-button').attr('onclick', 'view_transfered_items()');
    $('#button-to').attr('onclick', 'toRight()');
    $('#button-from').attr('onclick', 'toLeft()');
    $('#add-button').attr('onclick', 'addItems()');
    $('#button-from-all').attr('onclick', 'toLeftAll()');
    $('#button-to-all').attr('onclick', 'toRightAll()');

    $('#add-field').focus();

    $(document).keypress(function (e) {
        if ($(".multiselect-left > div").hasClass("selected")) {
            if (e.which == 13) {
                toRight();
            }
        }
        if ($(".multiselect-right > div").hasClass("selected")) {
            if (e.which == 13) {
                toLeft();
            }
        }
        if ($('#add-field').is(":focus")) {
            if (e.which == 13) {
                addItems();
            }
        }
        if (e.which == 32) {
            $('#add-field').focus();
        }
    });
    $(".multiselect-content").contextmenu(function () {
        $(this).find('.item').removeClass('selected');
        return false;
    });
});
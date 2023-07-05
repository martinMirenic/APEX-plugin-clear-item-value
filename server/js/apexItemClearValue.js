// APEX Plugin: APEX Item - clear APEX Item Value
// Author: Martin Mirenic
// Version: 1.0

//global namespace
var apexItemClearValue = {
  fInitClearItem: function () {
    apex.debug.message('INIT apexItemClearValue.fInitClearItem', arguments)
    const widths = {
      marginNormal:0,
      marginExtended:32
    };
    // fetch plugin attributes 
    let pThis = this
      , pOptions = JSON.parse(pThis.action.attribute01)

    apex.debug.message('DA pOptions', pOptions)
    //console.log('DA pOptions', pOptions)

    let vArrItems = pOptions.items
      , vIcon = pOptions.icon || 'fa-times'
      , vSuppressEvent = pOptions.suppressChangeEvent == 'Y' ? true : false;

    apex.debug.message(' vArrItems', vArrItems)
    apex.debug.message(' vIcon', vIcon)
    var clearValue = function () {
      apex.debug.message('clearValue START', arguments)
      console.log('clearValue START', arguments)
      apex.item($(this).data('selector')).setValue(null, null, vSuppressEvent);
    }
    vArrItems.forEach(el => {
      apex.debug.message(' vArrItems.forEach START', el)
      // defaults 
      var container = el.itemName + '_CONTAINER';
      var itemObj$ = $('#' + el.itemName);
      if (itemObj$.siblings('.display_only').length > 0  || itemObj$.length == 0) {
        return;
      }
      var itemType = el.itemType;
      var pMarginRight;
      var secondSelector = '';
      var paddingClass = 'inline-padding-normal';
      var marginRight = 0;
      apex.debug.message(' vArrItems.forEach container', container)
      apex.debug.message(' vArrItems.forEach itemType', itemType)
      if (itemType.length > 0) {
        console.log('itemType ', itemType);
        switch (itemType) {
          case ('NATIVE_TEXT_FIELD'):
            secondSelector = 'input';
            break;
          case ('NATIVE_NUMBER_FIELD'):
            secondSelector = 'input';
            break;
          case ('NATIVE_PASSWORD'):
            secondSelector = 'input';
            break;
          case ('NATIVE_AUTO_COMPLETE'):
            secondSelector = 'input';
            break;
          case ('NATIVE_TEXTAREA'):
            secondSelector = 'label';
            paddingClass = 'container-margin-extended';
            break;
          case ('NATIVE_SELECT_LIST'):
            secondSelector = 'select';
            paddingClass = 'inline-padding-extended';
            marginRight = widths.marginExtended;
            break;
          case ('NATIVE_POPUP_LOV'):
            secondSelector = 'input';
            paddingClass = 'inline-padding-extended';
            marginRight = widths.marginExtended;
            break;
          case ('NATIVE_DATE_PICKER_APEX'):
            secondSelector = 'input';
            paddingClass = 'inline-padding-extended';
            marginRight = widths.marginExtended;
            break;
          case ('NATIVE_COLOR_PICKER'):
            secondSelector = 'input';
            paddingClass = 'inline-padding-extended';
            marginRight = widths.marginExtended;
            break;
          default:
            apex.debug.info('Default: ', el.itemName, itemType);
        }
        apex.debug.message(' vArrItems.forEach secondSelector', secondSelector)
        apex.debug.message(' vArrItems.forEach paddingClass', paddingClass)
        apex.debug.message(' vArrItems.forEach marginRight', marginRight)

        //- must check if item has post text to correct the position.
        if ($('#' + container + ' ' + '.t-Form-itemText--post').length > 0){
          pMarginRight = marginRight + $('#' + container + ' ' + '.t-Form-itemText--post').width() + 2; //- correctional margin
        } else{
          pMarginRight = marginRight;
        }

        if (secondSelector.length > 0) {
          $('#' + container + ' ' + secondSelector).addClass(paddingClass);
          $('#' + container + ' ' + secondSelector).parent().append('<span class="inline-clear-container"' 
            + ' style="margin-right:' + pMarginRight + 'px"><span aria-hidden="true" class="fa '
            + vIcon + ' inline-clear-content item-value-clear" data-selector="' + el.itemName + '"></span></span>')
        }
      }

      apex.debug.message(' vArrItems.forEach END ', el)
    });
    // set listener for .item-value-clear click
    $('.item-value-clear').on('click', clearValue);
  }
}
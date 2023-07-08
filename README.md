# APEX-plugin-clear-item-value
Dynamic action plugin for adding clear item value button to APEX item component.

# Important notes
- **Sample app is NOT APEX 22.2 supported** at the moment, but **Plugin IS APEX 22.2 compatible**.
- Only Floating item template option is supported at the moment.

## Changelog
### Release 1.0 
- Init project
### Release 1.1
- Plugin Support for APEX 22.2.1
- remove background efect on hover

## Install
- Import plugin file "dynamic_action_plugin_hr_mmirenic_clear_apex_item_value.sql" into your APEX application.

## Plugin Settings

### Component Attributes
#### Item(s)
- Type: `Page Items`
- List of page items that the Clear button will be attached to.
- Supported item types are:
  - Text field,
  - Textarea,
  - Number field,
  - Date picker (APEX type),
  - Color picker,
  - Select list,
  - Password,
  - Autocomplete,
  - Popup LOV.
#### Icon
- Type: `Icon`
- Font APEX icon class that represents the button.
- Default value - fa-times


#### Suppress Change Event
- Type: `Yes/No`
- Yes/No option - if "Yes" is selected Item's change event will be suppressed.
- Default value - No.

## Demo
https://apex.oracle.com/pls/apex/r/dbp_project/clear-apex-item-value/home

## Preview
## ![](https://raw.githubusercontent.com/martinMirenic/APEX-plugin-clear-item-value/main/APEX_clear_item_value.gif)
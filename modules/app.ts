
var mainToolbar = {
		view: "toolbar",
		
		elements:[
			{},
			{view: "icon", icon: "search",  width: 45, popup: "searchPopup"},
			{view: "icon", icon: "envelope-o", value: 3, width: 45, popup: "mailPopup"},
			{view: "icon", icon: "comments-o", value: 5, width: 45, popup: "messagePopup"}
		]
	};

export default {
  $ui: {
    rows: [
      mainToolbar,
      {
        body: {
          $subview: true
        }
      }
    ]

  }

}
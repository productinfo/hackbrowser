/**
 * handles all IPC communication with the main process
 *
 * @param hackBrowserWindow controller
 * @constructor
 */
function NavigationHistoryHandler(hackBrowserWindow) {
	let _this = this

	/* ====================================
	 private member variables
	 ====================================== */


	/* ====================================
	 private methods
	 ====================================== */
	let init = function() {
	}


	/* ====================================
	 public methods
	 ====================================== */
	_this.addNavigationHistory = function(navigationInfo, callback) {
		hackBrowserWindow.getIPCHandler().requestAddNavigationHistory(navigationInfo, callback)
	}

	init()
}
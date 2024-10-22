const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 500,
        height: 300,
    //     frame:false,
    //    fullscreen:true, 
        webPreferences: {
            nodeIntegration: true
        }
    })

    // win.loadFile('index.html')
    win.loadURL("http://localhost:3000/")
}

app.whenReady().then(() => {
    createWindow()


})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

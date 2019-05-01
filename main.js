
class Panel{
    constructor(panel){
      this.panelButtons = panel.querySelector('.panel-buttons');
      this.panelBtnOpen = panel.querySelector('.panel-btn-open');
      this.panelBtnClose = panel.querySelector('.panel-btn-close');
      this.panelContent = panel.querySelector('.panel-content');
      this.panelButtons.addEventListener('click', () => this.togglePanel());
    }
    
    togglePanel(){
      this.panelBtnOpen.classList.toggle('hide-btn');
      this.panelBtnClose.classList.toggle('hide-btn');
      this.panelContent.classList.toggle('toggle-on');
    }
  }
  

  const panels = document.querySelectorAll('.panel');
 console.log(panels)
  panels.forEach(panel => new Panel(panel));
  

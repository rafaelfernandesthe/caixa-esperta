import { finalize } from 'rxjs/operators';
import { RestService } from './../services/rest.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-management',
  templateUrl: 'management.page.html',
  styleUrls: ['management.page.scss']
})
export class ManagementPage implements OnInit {

  listItems:any[];

  constructor(public restService: RestService, public alertController: AlertController) {}

  ngOnInit(): void {
    this.getList();
  }

  async getList() {
    this.restService.getList().pipe(
      finalize(() => console.log('ok!'))
    ).subscribe({
      next: (data) => {
        this.listItems = data.boxList;
        console.log(this.listItems?.length);
        // this.presentAlert('Imagem registrada com sucesso!');
      },
      error: (err) => {
        console.error('TransactionsComponent error', err);
        this.presentAlert('Erro: ' + JSON.stringify(err));
      },
    });
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      cssClass: 'alert-class',
      header: 'Sucesso',
      subHeader: 'Imagem Selecionada',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}

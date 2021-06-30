import { RestService } from './../services/rest.service';
import { PhotoService } from './../services/photo.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-new',
  templateUrl: 'new.page.html',
  styleUrls: ['new.page.scss']
})
export class NewPage {

  constructor(
    public alertController: AlertController,
    public photoService: PhotoService,
    public restService:RestService) {}

  async captureAndUploadPhoto() {
    const base64Img = await this.photoService.doPhoto();

    this.restService.postPhoto(base64Img).pipe(
      finalize(() => console.log('ok!'))
    ).subscribe({
      next: (data) => {
        console.log(data);
        this.presentAlert('Imagem registrada com sucesso!');
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

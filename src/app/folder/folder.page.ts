import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// ======= JRFSN ======= //
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx'; 
// ======= JRFSN ======= //



import * as $ from 'jquery';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public uuid_cod: any; 
  public host_ip: any;

  // constructor(private activatedRoute: ActivatedRoute, private uniqueDeviceID: UniqueDeviceID) { }

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    
    // this.uuid_cod =  this.uniqueDeviceID.get().then((uuid: any) => console.log(uuid)).catch((error: any) => console.log(error)); 
    this.uuid_cod = 'er5ty876ertye678rytfgh76j'; 

    /*
    let host1 = this.networkInterface.getWiFiIPAddress()
    .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
    .catch(error => console.error(`Unable to get IP: ${error}`));

    let host2 = this.networkInterface.getCarrierIPAddress()
    .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
    .catch(error => console.error(`Unable to get IP: ${error}`));

    this.host_ip = ( ( host1 != null )? host2 : host1 );
    */

				$( 'ion-button[name="ion-button-ajax"' ).on( 'click' , function(event) { 
                    
                    // ========= pagina ======== // 
                    $.ajax({ 
                      // http://localhost:8100/ajax/Inbox
                      url: 'http://127.0.0.1:85/lista.html', 
                      data: {  },  
                      type: 'get', dataType: 'html', cache: false,  async: true, 
                      success: function (json) {   
                        console.log(json);
                        try { 
                        	$('#pagina').empty().html(json);
                        } catch (e) {
                          console.log(e.message); 
                        }
                      }, beforeSend: function (xhr) {
                      }, error: function (XMLHttpRequest, textStatus, errorThrown ) { console.log(XMLHttpRequest); console.log(textStatus); console.log(errorThrown); }
                    }).done(function(){}).fail(function( XMLHttpRequest, textStatus, errorThrown ){
                      console.log(XMLHttpRequest); console.log(textStatus); console.log(errorThrown);  
                    }).always(function(){});
                    // ========= pagina ======== //


                    // ==== texto comum ====== 
                    $.ajax({
                      url: 'http://localhost:8100/assets/texto.html',  
                      data: {  },  
                      type: 'get', dataType: 'html', cache: false,  async: true, 
                      success: function (json) {   
                        // console.log(json);
                        try { 
                          $('ion-text[name="codigojavascript"] code[name="codejavascript"]').empty().html(json);
                        } catch (e) {
                          console.log(e.message); 
                        }
                      }, beforeSend: function (xhr) {
                      }, error: function (XMLHttpRequest, textStatus, errorThrown ) { console.log(XMLHttpRequest); console.log(textStatus); console.log(errorThrown); }
                    }).done(function(){}).fail(function( XMLHttpRequest, textStatus, errorThrown ){
                      console.log(XMLHttpRequest); console.log(textStatus); console.log(errorThrown);  
                    }).always(function(){});
                    // ==== texto comum ======


				});  
                 
  }

}

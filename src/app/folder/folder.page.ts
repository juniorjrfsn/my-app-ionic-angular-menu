import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
         		 
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

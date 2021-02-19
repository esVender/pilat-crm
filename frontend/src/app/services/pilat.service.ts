import {Injectable} from '@angular/core';
import {Users} from "../../core/models/users";
import {BreakpointObserver} from "@angular/cdk/layout";
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from "@angular/cdk/platform";
import {PilatParams} from "../../core/models/pilatParams";
import {PilatParamService} from "../../core/services/pilat-param.service";
import {environment} from "../../environments/environment";
import {addDias, setFormatoFecha} from "fechas";
import {CodigoFormatoFecha} from "fechas/dist/src";
import {type} from "os";

@Injectable({
  providedIn: 'root'
})
export class PilatService {
  
  environment = environment;
  
  featuresPilatService:boolean = true;
  pipelineStatus:string[] = [];
  isLoading:Boolean;
  currentUser: Users;
  currentSessId: string;
  userLoggedIn: boolean;
  isSmallScreen:boolean;
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  platform:Platform;
  pageTitle:string = '';


  DIC_LEAD_STATUSES = '5fe93b0e3c3708f0b489dcbd';
  DIC_PROSPECT_STAGES = '5ff2c4520a60a5252ddf62f6';
  DIC_OPPORTUNITY_STAGES = '5ff4a8d9aef65440b888db40';
  DIC_CI_EXT = '60029af5e2015758ec69b743';
  DIC_CURRENCIES = '6007aadcb4fefa3640d86b7c';
  DIC_SALUTATIONS = '6007ab04b4fefa3640d86b7d';
  DIC_MODULES = '60088baf3682cc5720f557b4';
  DIC_QUOTE_STAGES = '60099356e047f90b126cd150';
  DIC_TITLES = '60099b1ee047f90b126cd157';
  DIC_LEAD_SOURCES = '601477bda8bde911171ec7d7';
  DIC_GENEROS = '60149128743736090e0bce67';
  DIC_RUBROS = '6014b982a7f3fd21af7bDIC1682';
  DIC_LEAD_TIPOS = '6014ba92a7f3fd21af7b1686';
  DIC_CLIENTE_TIPOS = '6014bc5ba7f3fd21af7b168a';
  DIC_TIPO_VENTAS = '6014ef4f1302f107d6f68efb';
  DIC_TIPO_PAGOS = '601a390100fff70c9ef353c1';
  DIC_TERM_YEARS = '6024d1a89cfd591c2cc323a0';
  DIC_APPROBAL_STATUSES = '6026062b00f59e33bce496ba';
  DIC_INVOICE_STATUSES = '6026055100f59e33bce496b7';
  DIC_COUNTRIES = '602b5632bc8a38062ce6826c';
  DIC_STATES = '602b57b8bc8a38062ce6826e';
  DIC_CITIES = '602b5649bc8a38062ce6826d';
  DIC_STAGES_PROSPECTS = '5ff2c4520a60a5252ddf62f6';
  DIC_STAGES_OPPORTUNITIES = '5ff4a8d9aef65440b888db40';
  DIC_OPPORTUNITY_TIPOS = '602fcc02429ac05467f9fe47';
  
  parLeadStatuses:PilatParams[] = [];
  parProspectStages:PilatParams[] = [];
  parOpportunityStages:PilatParams[] = [];
  parCiExtentions:PilatParams[] = [];
  parCurrencies:PilatParams[] = [];
  parSalutations:PilatParams[] = [];
  parModules:PilatParams[] = [];
  parQuoteStages:PilatParams[] = [];
  parTitles:PilatParams[] = [];
  parLeadSources:PilatParams[] = [];
  parGeneros:PilatParams[] = [];
  parRubros:PilatParams[] = [];
  parLeadTipos:PilatParams[] = [];
  parClienteTipos:PilatParams[] = [];
  parVentaTipos:PilatParams[] = [];
  parTermYears:PilatParams[] = [];
  parPagoTipos:PilatParams[] = [];
  parApprovalStatuses:PilatParams[] = [];
  parInvoiceStatuses:PilatParams[] = [];
  parCountries:PilatParams[] = [];
  parStates:PilatParams[] = [];
  parCities:PilatParams[] = [];
  parOpportunityTipos:PilatParams[] = [];
  
  parPersonaNatural:PilatParams;
  parPersonaJuridica:PilatParams;
  parMonedaDolar:PilatParams;
  parMonedaBoliviano:PilatParams;
  parPagoBanco: PilatParams;
  parPagoContado: PilatParams;
  parPagoPlazo: PilatParams;
  parApproved: PilatParams;
  parNotApproved: PilatParams;
  parInvoiced: PilatParams;
  parNotInvoiced: PilatParams;
  
  constructor(
    breakpointObserver:BreakpointObserver,
    private pilatParamService:PilatParamService
  ) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }
  
  async setParams(aDictionaries:string[]) {
    return new Promise(async (resolve) => {
      await this.pilatParamService.getAllPilatParams([],{par_dictionary_id:aDictionaries}).subscribe(async (res) => {
        let response = res as {status:string, message:string, data:PilatParams[]};
        if (response.data) {
          await response.data.forEach(async (param:PilatParams) => {
            switch (param.par_dictionary_id) {
              case this.DIC_LEAD_STATUSES: !this.parLeadStatuses.find(par => par._id == param._id) ? this.parLeadStatuses.push(param) : false; break;
              case this.DIC_PROSPECT_STAGES: !this.parProspectStages.find(par => par._id == param._id) ? this.parProspectStages.push(param) : false; break;
              case this.DIC_OPPORTUNITY_STAGES: !this.parOpportunityStages.find(par => par._id == param._id) ? this.parOpportunityStages.push(param) : false; break;
              case this.DIC_CI_EXT: !this.parCiExtentions.find(par => par._id == param._id) ? this.parCiExtentions.push(param) : false; break;
              case this.DIC_CURRENCIES: !this.parCurrencies.find(par => par._id == param._id) ? this.parCurrencies.push(param) : false; break;
              case this.DIC_SALUTATIONS: !this.parSalutations.find(par => par._id == param._id) ? this.parSalutations.push(param) : false; break;
              case this.DIC_MODULES: !this.parModules.find(par => par._id == param._id) ? this.parModules.push(param) : false; break;
              case this.DIC_QUOTE_STAGES: !this.parQuoteStages.find(par => par._id == param._id) ? this.parQuoteStages.push(param) : false; break;
              case this.DIC_TITLES: !this.parTitles.find(par => par._id == param._id) ? this.parTitles.push(param) : false; break;
              case this.DIC_LEAD_SOURCES: !this.parLeadSources.find(par => par._id == param._id) ? this.parLeadSources.push(param) : false; break;
              case this.DIC_GENEROS: !this.parGeneros.find(par => par._id == param._id) ? this.parGeneros.push(param) : false; break;
              case this.DIC_RUBROS: !this.parRubros.find(par => par._id == param._id) ? this.parRubros.push(param) : false; break;
              case this.DIC_LEAD_TIPOS: !this.parLeadTipos.find(par => par._id == param._id) ? this.parLeadTipos.push(param) : false; break;
              case this.DIC_CLIENTE_TIPOS: !this.parClienteTipos.find(par => par._id == param._id) ? this.parClienteTipos.push(param) : false; break;
              case this.DIC_TIPO_VENTAS: !this.parVentaTipos.find(par => par._id == param._id) ? this.parVentaTipos.push(param) : false; break;
              case this.DIC_TIPO_PAGOS: !this.parPagoTipos.find(par => par._id == param._id) ? this.parPagoTipos.push(param) : false; break;
              case this.DIC_TERM_YEARS: !this.parTermYears.find(par => par._id == param._id) ? this.parTermYears.push(param) : false; break;
              case this.DIC_APPROBAL_STATUSES: !this.parApprovalStatuses.find(par => par._id == param._id) ? this.parApprovalStatuses.push(param) : false; break;
              case this.DIC_INVOICE_STATUSES: !this.parInvoiceStatuses.find(par => par._id == param._id) ? this.parInvoiceStatuses.push(param) : false; break;
              case this.DIC_COUNTRIES: !this.parCountries.find(par => par._id == param._id) ? this.parCountries.push(param) : false; break;
              case this.DIC_STATES: !this.parStates.find(par => par._id == param._id) ? this.parStates.push(param) : false; break;
              case this.DIC_CITIES: !this.parCities.find(par => par._id == param._id) ? this.parCities.push(param) : false; break;
              case this.DIC_OPPORTUNITY_TIPOS: !this.parOpportunityTipos.find(par => par._id == param._id) ? this.parOpportunityTipos.push(param) : false; break;
            }
        
            switch (param.id) {
              case 54:this.parPersonaNatural = param;break;
              case 55:this.parPersonaJuridica = param;break;
              case 41:this.parMonedaBoliviano = param;break;
              case 42:this.parMonedaDolar = param;break;
              case 58:this.parPagoBanco = param;break;
              case 59:this.parPagoContado = param;break;
              case 60:this.parPagoPlazo = param;break;
              case 65:this.parApproved = param;break;
              case 66:this.parNotApproved = param;break;
              case 63:this.parInvoiced = param;break;
              case 64:this.parNotInvoiced = param;break;
            }
          });
        }
        resolve();
      });
    });
  }
  
  setDate(date) {
    if (date) {
      let dayPad = date.getDate().pad(2);
      let monthPad = (date.getMonth()).pad(2);
      let yearPad = date.getFullYear();
      let strToday = `${dayPad}/${monthPad}/${yearPad}`;
      let strTomorrow = addDias(strToday,1);
      let strAfterTomorrow = addDias(strToday,2);
      let [day, month, year] = strTomorrow.split('/');
      let [dayT, monthT, yearT] = strTomorrow.split('/');
      let [dayAfterA, monthAfterA, yearAfterA] = strAfterTomorrow.split('/');
      return strToday;
    }
    return null
  }
}

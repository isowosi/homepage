define(['dart_sdk', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/change_detection/host', 'packages/isowosi_angular_components/src/components/isowosi_impressum/isowosi_impressum', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, view_type, constants, view, app_view_utils, host, isowosi_impressum, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = host.src__core__linker__app_view;
  const src__core__linker__component_factory = host.src__core__linker__component_factory;
  const src__components__isowosi_impressum__isowosi_impressum = isowosi_impressum.src__components__isowosi_impressum__isowosi_impressum;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__components__isowosi_impressum__isowosi_impressum$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let ComponentRefOfIsowosiImpressumComponent = () => (ComponentRefOfIsowosiImpressumComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__components__isowosi_impressum__isowosi_impressum.IsowosiImpressumComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfIsowosiImpressumComponent = () => (ComponentFactoryOfIsowosiImpressumComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__components__isowosi_impressum__isowosi_impressum.IsowosiImpressumComponent)))();
  dart.defineLazy(src__components__isowosi_impressum__isowosi_impressum$46template, {
    /*src__components__isowosi_impressum__isowosi_impressum$46template.styles$IsowosiImpressumComponent*/get styles$IsowosiImpressumComponent() {
      return dart.constList(['._nghost-%COMP% { margin:0 40px; }'], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _el_6 = Symbol('_el_6');
  const _el_8 = Symbol('_el_8');
  const _el_10 = Symbol('_el_10');
  const _el_12 = Symbol('_el_12');
  const _el_14 = Symbol('_el_14');
  const _el_16 = Symbol('_el_16');
  const _el_17 = Symbol('_el_17');
  const _el_18 = Symbol('_el_18');
  const _el_20 = Symbol('_el_20');
  const _el_22 = Symbol('_el_22');
  const _el_23 = Symbol('_el_23');
  const _el_25 = Symbol('_el_25');
  const _el_26 = Symbol('_el_26');
  const _el_28 = Symbol('_el_28');
  const _el_30 = Symbol('_el_30');
  const _el_32 = Symbol('_el_32');
  const _el_34 = Symbol('_el_34');
  const _el_36 = Symbol('_el_36');
  const _el_38 = Symbol('_el_38');
  const _el_40 = Symbol('_el_40');
  const _el_42 = Symbol('_el_42');
  const _el_44 = Symbol('_el_44');
  const _el_46 = Symbol('_el_46');
  const _el_47 = Symbol('_el_47');
  const _el_49 = Symbol('_el_49');
  const _el_51 = Symbol('_el_51');
  const _el_53 = Symbol('_el_53');
  const _el_55 = Symbol('_el_55');
  const _el_57 = Symbol('_el_57');
  const _el_59 = Symbol('_el_59');
  const _el_61 = Symbol('_el_61');
  const _el_63 = Symbol('_el_63');
  const _el_65 = Symbol('_el_65');
  const _el_67 = Symbol('_el_67');
  const _el_69 = Symbol('_el_69');
  const _el_71 = Symbol('_el_71');
  const _el_73 = Symbol('_el_73');
  const _el_75 = Symbol('_el_75');
  const _el_77 = Symbol('_el_77');
  const _el_79 = Symbol('_el_79');
  const _el_81 = Symbol('_el_81');
  const _el_83 = Symbol('_el_83');
  const _el_85 = Symbol('_el_85');
  const _el_87 = Symbol('_el_87');
  const _el_88 = Symbol('_el_88');
  let const$;
  src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0 = class ViewIsowosiImpressumComponent0 extends src__core__linker__app_view.AppView$(src__components__isowosi_impressum__isowosi_impressum.IsowosiImpressumComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Impressum');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_2]);
      let _text_3 = html.Text.new('Angaben gemäß § 5 TMG:');
      this[_el_2][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_4]);
      let _text_5 = html.Text.new('isowosi UG\r\n  (haftungsbeschränkt)');
      this[_el_4][$append](_text_5);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_4]);
      this.addShimE(this[_el_6]);
      let _text_7 = html.Text.new('Goldbachstr. 7');
      this[_el_4][$append](_text_7);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_4]);
      this.addShimE(this[_el_8]);
      let _text_9 = html.Text.new('90480 Nürnberg');
      this[_el_4][$append](_text_9);
      this[_el_10] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_10]);
      let _text_11 = html.Text.new('Vertreten durch:');
      this[_el_10][$append](_text_11);
      this[_el_12] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_12]);
      let _text_13 = html.Text.new('Dennis Kaselow');
      this[_el_12][$append](_text_13);
      this[_el_14] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_14]);
      let _text_15 = html.Text.new('Kontakt:');
      this[_el_14][$append](_text_15);
      this[_el_16] = html.TableElement._check(src__core__linker__app_view.createAndAppend(doc, 'table', parentRenderNode));
      this.addShimC(this[_el_16]);
      this[_el_17] = src__core__linker__app_view.createAndAppend(doc, 'tr', this[_el_16]);
      this.addShimE(this[_el_17]);
      this[_el_18] = src__core__linker__app_view.createAndAppend(doc, 'td', this[_el_17]);
      this.addShimE(this[_el_18]);
      let _text_19 = html.Text.new('Telefon:');
      this[_el_18][$append](_text_19);
      this[_el_20] = src__core__linker__app_view.createAndAppend(doc, 'td', this[_el_17]);
      this.addShimE(this[_el_20]);
      let _text_21 = html.Text.new('0911 / 4087812');
      this[_el_20][$append](_text_21);
      this[_el_22] = src__core__linker__app_view.createAndAppend(doc, 'tr', this[_el_16]);
      this.addShimE(this[_el_22]);
      this[_el_23] = src__core__linker__app_view.createAndAppend(doc, 'td', this[_el_22]);
      this.addShimE(this[_el_23]);
      let _text_24 = html.Text.new('E-Mail:');
      this[_el_23][$append](_text_24);
      this[_el_25] = src__core__linker__app_view.createAndAppend(doc, 'td', this[_el_22]);
      this.addShimE(this[_el_25]);
      this[_el_26] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_25]));
      this.createAttr(this[_el_26], 'href', 'mailto://impressum@isowosi.com');
      this.addShimC(this[_el_26]);
      let _text_27 = html.Text.new('impressum@isowosi.com');
      this[_el_26][$append](_text_27);
      this[_el_28] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_28]);
      let _text_29 = html.Text.new('Registereintrag:');
      this[_el_28][$append](_text_29);
      this[_el_30] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_30]);
      let _text_31 = html.Text.new('Eintragung im Handelsregister.');
      this[_el_30][$append](_text_31);
      this[_el_32] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_30]);
      this.addShimE(this[_el_32]);
      let _text_33 = html.Text.new('Registergericht: Amtsgericht Nürnberg');
      this[_el_30][$append](_text_33);
      this[_el_34] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_30]);
      this.addShimE(this[_el_34]);
      let _text_35 = html.Text.new('Registernummer:\r\n  HRB 32785');
      this[_el_30][$append](_text_35);
      this[_el_36] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_36]);
      let _text_37 = html.Text.new('Umsatzsteuer-ID:');
      this[_el_36][$append](_text_37);
      this[_el_38] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_38]);
      let _text_39 = html.Text.new('Umsatzsteuer-Identifikationsnummer gemäß\r\n  §27 a Umsatzsteuergesetz:');
      this[_el_38][$append](_text_39);
      this[_el_40] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_38]);
      this.addShimE(this[_el_40]);
      let _text_41 = html.Text.new('DE306131113');
      this[_el_38][$append](_text_41);
      this[_el_42] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_42]);
      let _text_43 = html.Text.new(' ');
      this[_el_42][$append](_text_43);
      this[_el_44] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_44]);
      let _text_45 = html.Text.new('Quelle:');
      this[_el_44][$append](_text_45);
      this[_el_46] = src__core__linker__app_view.createAndAppend(doc, 'em', this[_el_44]);
      this.addShimE(this[_el_46]);
      this[_el_47] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_46]));
      this.createAttr(this[_el_47], 'href', 'https://www.e-recht24.de/impressum-generator.html');
      this.addShimC(this[_el_47]);
      let _text_48 = html.Text.new('https://www.e-recht24.de');
      this[_el_47][$append](_text_48);
      this[_el_49] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      this.addShimE(this[_el_49]);
      let _text_50 = html.Text.new('Haftungsausschluss (Disclaimer)');
      this[_el_49][$append](_text_50);
      this[_el_51] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_51]);
      let _text_52 = html.Text.new('Haftung für Inhalte');
      this[_el_51][$append](_text_52);
      this[_el_53] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_53]);
      let _text_54 = html.Text.new('Als Diensteanbieter sind wir\r\n  gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen\r\n  Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,\r\n  übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu\r\n  forschen, die auf eine rechtswidrige Tätigkeit hinweisen.');
      this[_el_53][$append](_text_54);
      this[_el_55] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_55]);
      let _text_56 = html.Text.new('Verpflichtungen zur Entfernung oder\r\n  Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine\r\n  diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung\r\n  möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend\r\n  entfernen.');
      this[_el_55][$append](_text_56);
      this[_el_57] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_57]);
      let _text_58 = html.Text.new('Haftung für Links');
      this[_el_57][$append](_text_58);
      this[_el_59] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_59]);
      let _text_60 = html.Text.new('Unser Angebot enthält Links zu externen Webseiten\r\n  Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte\r\n  auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige\r\n  Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf\r\n  mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der\r\n  Verlinkung nicht erkennbar.');
      this[_el_59][$append](_text_60);
      this[_el_61] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_61]);
      let _text_62 = html.Text.new('Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne\r\n  konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen\r\n  werden wir derartige Links umgehend entfernen.');
      this[_el_61][$append](_text_62);
      this[_el_63] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_63]);
      let _text_64 = html.Text.new('Urheberrecht');
      this[_el_63][$append](_text_64);
      this[_el_65] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_65]);
      let _text_66 = html.Text.new('Die durch die Seitenbetreiber\r\n  erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die\r\n  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des\r\n  Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads\r\n  und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.');
      this[_el_65][$append](_text_66);
      this[_el_67] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_67]);
      let _text_68 = html.Text.new('Soweit\r\n  die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.\r\n  Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine\r\n  Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden\r\n  von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.');
      this[_el_67][$append](_text_68);
      this[_el_69] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_69]);
      let _text_70 = html.Text.new(' ');
      this[_el_69][$append](_text_70);
      this[_el_71] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      this.addShimE(this[_el_71]);
      let _text_72 = html.Text.new('Datenschutzerklärung');
      this[_el_71][$append](_text_72);
      this[_el_73] = src__core__linker__app_view.createAndAppend(doc, 'h2', parentRenderNode);
      this.addShimE(this[_el_73]);
      let _text_74 = html.Text.new('Datenschutz');
      this[_el_73][$append](_text_74);
      this[_el_75] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_75]);
      let _text_76 = html.Text.new('Die Betreiber dieser Seiten nehmen den\r\n  Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und\r\n  entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.');
      this[_el_75][$append](_text_76);
      this[_el_77] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_77]);
      let _text_78 = html.Text.new('Die\r\n  Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf\r\n  unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben\r\n  werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre\r\n  ausdrückliche Zustimmung nicht an Dritte weitergegeben.');
      this[_el_77][$append](_text_78);
      this[_el_79] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_79]);
      let _text_80 = html.Text.new('Wir weisen darauf hin, dass die\r\n  Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen\r\n  kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht\r\n  möglich.');
      this[_el_79][$append](_text_80);
      this[_el_81] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_81]);
      let _text_82 = html.Text.new(' ');
      this[_el_81][$append](_text_82);
      this[_el_83] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_83]);
      let _text_84 = html.Text.new(' ');
      this[_el_83][$append](_text_84);
      this[_el_85] = src__core__linker__app_view.createAndAppend(doc, 'p', parentRenderNode);
      this.addShimE(this[_el_85]);
      let _text_86 = html.Text.new('Quelle:');
      this[_el_85][$append](_text_86);
      this[_el_87] = src__core__linker__app_view.createAndAppend(doc, 'em', this[_el_85]);
      this.addShimE(this[_el_87]);
      this[_el_88] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_87]));
      this.createAttr(this[_el_88], 'href', 'https://www.erecht24.de');
      this.addShimC(this[_el_88]);
      let _text_89 = html.Text.new('https://www.e-recht24.de');
      this[_el_88][$append](_text_89);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
  };
  (src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_6] = null;
    this[_el_8] = null;
    this[_el_10] = null;
    this[_el_12] = null;
    this[_el_14] = null;
    this[_el_16] = null;
    this[_el_17] = null;
    this[_el_18] = null;
    this[_el_20] = null;
    this[_el_22] = null;
    this[_el_23] = null;
    this[_el_25] = null;
    this[_el_26] = null;
    this[_el_28] = null;
    this[_el_30] = null;
    this[_el_32] = null;
    this[_el_34] = null;
    this[_el_36] = null;
    this[_el_38] = null;
    this[_el_40] = null;
    this[_el_42] = null;
    this[_el_44] = null;
    this[_el_46] = null;
    this[_el_47] = null;
    this[_el_49] = null;
    this[_el_51] = null;
    this[_el_53] = null;
    this[_el_55] = null;
    this[_el_57] = null;
    this[_el_59] = null;
    this[_el_61] = null;
    this[_el_63] = null;
    this[_el_65] = null;
    this[_el_67] = null;
    this[_el_69] = null;
    this[_el_71] = null;
    this[_el_73] = null;
    this[_el_75] = null;
    this[_el_77] = null;
    this[_el_79] = null;
    this[_el_81] = null;
    this[_el_83] = null;
    this[_el_85] = null;
    this[_el_87] = null;
    this[_el_88] = null;
    src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.component, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('isowosi-impressum'));
    let t = src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0._renderType;
    t == null ? src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__components__isowosi_impressum__isowosi_impressum$46template.styles$IsowosiImpressumComponent) : t;
    this.setupComponentType(src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0._renderType);
  }).prototype = src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0.prototype;
  dart.addTypeTests(src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0);
  dart.setMethodSignature(src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0, () => ({
    __proto__: dart.getMethods(src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__components__isowosi_impressum__isowosi_impressum.IsowosiImpressumComponent), [])
  }));
  dart.setFieldSignature(src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0, () => ({
    __proto__: dart.getFields(src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_el_6]: dart.fieldType(html.Element),
    [_el_8]: dart.fieldType(html.Element),
    [_el_10]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.Element),
    [_el_14]: dart.fieldType(html.Element),
    [_el_16]: dart.fieldType(html.TableElement),
    [_el_17]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.Element),
    [_el_20]: dart.fieldType(html.Element),
    [_el_22]: dart.fieldType(html.Element),
    [_el_23]: dart.fieldType(html.Element),
    [_el_25]: dart.fieldType(html.Element),
    [_el_26]: dart.fieldType(html.AnchorElement),
    [_el_28]: dart.fieldType(html.Element),
    [_el_30]: dart.fieldType(html.Element),
    [_el_32]: dart.fieldType(html.Element),
    [_el_34]: dart.fieldType(html.Element),
    [_el_36]: dart.fieldType(html.Element),
    [_el_38]: dart.fieldType(html.Element),
    [_el_40]: dart.fieldType(html.Element),
    [_el_42]: dart.fieldType(html.Element),
    [_el_44]: dart.fieldType(html.Element),
    [_el_46]: dart.fieldType(html.Element),
    [_el_47]: dart.fieldType(html.AnchorElement),
    [_el_49]: dart.fieldType(html.Element),
    [_el_51]: dart.fieldType(html.Element),
    [_el_53]: dart.fieldType(html.Element),
    [_el_55]: dart.fieldType(html.Element),
    [_el_57]: dart.fieldType(html.Element),
    [_el_59]: dart.fieldType(html.Element),
    [_el_61]: dart.fieldType(html.Element),
    [_el_63]: dart.fieldType(html.Element),
    [_el_65]: dart.fieldType(html.Element),
    [_el_67]: dart.fieldType(html.Element),
    [_el_69]: dart.fieldType(html.Element),
    [_el_71]: dart.fieldType(html.Element),
    [_el_73]: dart.fieldType(html.Element),
    [_el_75]: dart.fieldType(html.Element),
    [_el_77]: dart.fieldType(html.Element),
    [_el_79]: dart.fieldType(html.Element),
    [_el_81]: dart.fieldType(html.Element),
    [_el_83]: dart.fieldType(html.Element),
    [_el_85]: dart.fieldType(html.Element),
    [_el_87]: dart.fieldType(html.Element),
    [_el_88]: dart.fieldType(html.AnchorElement)
  }));
  dart.defineLazy(src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0, {
    /*src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__components__isowosi_impressum__isowosi_impressum$46template.viewFactory_IsowosiImpressumComponent0 = function(parentView, parentIndex) {
    return new src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__isowosi_impressum__isowosi_impressum$46template, {
    /*src__components__isowosi_impressum__isowosi_impressum$46template.styles$IsowosiImpressumComponentHost*/get styles$IsowosiImpressumComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _IsowosiImpressumComponent_0_5 = Symbol('_IsowosiImpressumComponent_0_5');
  src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0 = class _ViewIsowosiImpressumComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_IsowosiImpressumComponent_0_5] = new src__components__isowosi_impressum__isowosi_impressum.IsowosiImpressumComponent.new();
      this[_compView_0].create(this[_IsowosiImpressumComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfIsowosiImpressumComponent()).new(0, this, this.rootEl, this[_IsowosiImpressumComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_IsowosiImpressumComponent_0_5] = null;
    src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.host, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0.prototype;
  dart.addTypeTests(src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0);
  dart.setMethodSignature(src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0, () => ({
    __proto__: dart.getMethods(src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0, () => ({
    __proto__: dart.getFields(src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__components__isowosi_impressum__isowosi_impressum$46template.ViewIsowosiImpressumComponent0),
    [_IsowosiImpressumComponent_0_5]: dart.fieldType(src__components__isowosi_impressum__isowosi_impressum.IsowosiImpressumComponent)
  }));
  src__components__isowosi_impressum__isowosi_impressum$46template.viewFactory_IsowosiImpressumComponentHost0 = function(parentView, parentIndex) {
    return new src__components__isowosi_impressum__isowosi_impressum$46template._ViewIsowosiImpressumComponentHost0.new(parentView, parentIndex);
  };
  dart.defineLazy(src__components__isowosi_impressum__isowosi_impressum$46template, {
    /*src__components__isowosi_impressum__isowosi_impressum$46template.IsowosiImpressumComponentNgFactory*/get IsowosiImpressumComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfIsowosiImpressumComponent()).new('isowosi-impressum', dart.fn(src__components__isowosi_impressum__isowosi_impressum$46template.viewFactory_IsowosiImpressumComponentHost0, AppViewAndintToAppView()), src__components__isowosi_impressum__isowosi_impressum$46template._IsowosiImpressumComponentMetadata));
    },
    /*src__components__isowosi_impressum__isowosi_impressum$46template._IsowosiImpressumComponentMetadata*/get _IsowosiImpressumComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__components__isowosi_impressum__isowosi_impressum$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__components__isowosi_impressum__isowosi_impressum$46template.initReflector = function() {
    if (dart.test(src__components__isowosi_impressum__isowosi_impressum$46template._visited)) {
      return;
    }
    src__components__isowosi_impressum__isowosi_impressum$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__components__isowosi_impressum__isowosi_impressum.IsowosiImpressumComponent), src__components__isowosi_impressum__isowosi_impressum$46template.IsowosiImpressumComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.trackLibraries("packages/isowosi_angular_components/src/components/isowosi_impressum/isowosi_impressum.template.ddc", {
    "package:isowosi_angular_components/src/components/isowosi_impressum/isowosi_impressum.template.dart": src__components__isowosi_impressum__isowosi_impressum$46template
  }, '{"version":3,"sourceRoot":"","sources":["isowosi_impressum.template.dart"],"names":[],"mappings":"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","file":"isowosi_impressum.template.ddc.js"}');
  // Exports:
  return {
    src__components__isowosi_impressum__isowosi_impressum$46template: src__components__isowosi_impressum__isowosi_impressum$46template
  };
});

//# sourceMappingURL=isowosi_impressum.template.ddc.js.map

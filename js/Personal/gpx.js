// create file
var Bike = ['files/gpx/Bike/B_201511_mtb.gpx',
'files/gpx/Bike/B_2017_Stockach_DonauTalRadoflzell-Konstanz.gpx',
'files/gpx/Bike/B_201709_Bike_Travel.gpx',
'files/gpx/Bike/B_201808_Schwarzwald.gpx',
'files/gpx/Bike/B_201809_Bike_Switzerland.gpx',
'files/gpx/Bike/B_201812_LesForges.gpx',
'files/gpx/Bike/B_201904_Ruegen_insel_runde.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0001.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0002.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0003.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0004.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0005.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0006.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0007.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0008.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0009.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0010.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0011.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0012.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0013.gpx',
'files/gpx/Bike/B_201906_FrankenJura_0014.gpx',
'files/gpx/Bike/B_20200424_Olima.gpx',
'files/gpx/Bike/B_20200426_Olima.gpx',
'files/gpx/Bike/B_20200428_Olima.gpx',
'files/gpx/Bike/B_20200501_Olima.gpx',
'files/gpx/Bike/B_20200503_Olima.gpx',
'files/gpx/Bike/B_20200508_Olima.gpx',
'files/gpx/Bike/B_20200510_Olima.gpx',
'files/gpx/Bike/B_20200512_Olima.gpx',
'files/gpx/Bike/B_202006_Ehrenschwangertal.gpx',
'files/gpx/Bike/B_202006_Jugethoehe.gpx']

var Hike = ['files/gpx/Hike/2017_Grosser_Mythen.gpx',
'files/gpx/Hike/2017_KS1T_Hinterstein-Rotspitze.gpx',
'files/gpx/Hike/2017_Luetispitze.gpx',
'files/gpx/Hike/2017_Nord_LechtalElbigenalp-Krotenkopf-Ubeleskarspitze-Hinterbornbach.gpx',
'files/gpx/Hike/201708_Druesberg.gpx',
'files/gpx/Hike/201711_Wgausflug.gpx',
'files/gpx/Hike/2018_W_HochYbrig_Druesberg.gpx',
'files/gpx/Hike/201804_Bockmattli.gpx',
'files/gpx/Hike/201804_Pfaender.gpx',
'files/gpx/Hike/201805_WG_Hike_0001.gpx',
'files/gpx/Hike/201805_WG_Hike_0002.gpx',
'files/gpx/Hike/201806_Zimba.gpx',
'files/gpx/Hike/201808_Feldberg.gpx',
'files/gpx/Hike/201809_Ottenhofen_imSchwarzwaldHiking.gpx',
'files/gpx/Hike/201810_Pizol.gpx',
'files/gpx/Hike/201811_Silberplatte_Klettern.gpx',
'files/gpx/Hike/201903_Saechsische_Schweiz.gpx_250.gpx',
'files/gpx/Hike/201910_Donautal.gpx',
'files/gpx/Hike/201910_Tajakante.gpx',
'files/gpx/Hike/202008_Klettern_Wogesen.gpx',
'files/gpx/Hike/202008_Pont-de-Barret_Trail.gpx',
'files/gpx/Hike/202011_Buergbergerhörnle.gpx',
'files/gpx/Hike/202012_Rottachberg.gpx',
'files/gpx/Hike/brunnenhochflue-t4.gpx',
'files/gpx/Hike/chaeserrugg_vonwalenstadt.gpx',
'files/gpx/Hike/murgtal_murgseeturm.gpx',
'files/gpx/Hike/plattberg_upssitzeostreich.gpx',
'files/gpx/Hike/saentis_vonsudden.gpx',
'files/gpx/Hike/sarek_2016.gpx',
'files/gpx/Hike/um_herumdergimpel.gpx',
'files/gpx/Hike/via_dellebochette.gpx',
'files/gpx/Hike/W_2013_Ebenalp.gpx',
'files/gpx/Hike/W_2013_Marwees.gpx',
'files/gpx/Hike/W_2015_Rosteinpass.gpx',
'files/gpx/Hike/W_2015_Saxer-luecke.gpx',
'files/gpx/Hike/W_2016_Santis.gpx',
'files/gpx/Hike/W_2017_Alpstein.gpx',
'files/gpx/Hike/W_202006_BucheneggerWasserfaelle.gpx',
'files/gpx/Hike/W_202006_Hochgrat.gpx',
'files/gpx/Hike/W_202006_Rubihorn.gpx',
'files/gpx/Hike/W_202007_Fohlenhaus_Baerenhoele.gpx',
'files/gpx/Hike/W_202007_Jubilaumsgrat_01.gpx',
'files/gpx/Hike/W_202007_Jubilaumsgrat_02.gpx',
'files/gpx/Hike/W_202007_Kramerspitz.gpx',
'files/gpx/Hike/W_202008_Tannheim-Hinterhornbach_01.gpx',
'files/gpx/Hike/W_202008_Tannheim-Hinterhornbach_02.gpx',
'files/gpx/Hike/W_202102_Hirschberg.gpx']

var HikeProject = ['files/gpx/Hike/Project/AKD_project.gpx',
'files/gpx/Hike/Project/moe_saladinspitze_rotewand_.gpx',
'files/gpx/Hike/Project/moew-paiserspitze_.gpx']

var SchitourProject = ['files/gpx/Schitour/Project/P_ST_moe-st-2t-carschinahuette.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st-2t-carschinahuette_2.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st-2t-claridenhuette.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st-2t-heilbronner_huette.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st-hirschberg.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st-mattjischhorn.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st_alpilakopf.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st_analperjoch.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st_gafier.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st_gampapingalpe.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st_gerenspitze.gpx',
'files/gpx/Schitour/Project/P_ST_moe-st_windeggerspitze.gpx',
'files/gpx/Schitour/Project/P_ST_st-moematona.gpx',
'files/gpx/Schitour/Project/P_ST_st-moemoerzelspitze.gpx',
'files/gpx/Schitour/Project/P_ST_Vogelberg-Zapporthutte-SAC.gpx',
'files/gpx/Schitour/Project/Panic0_A1_Schwarzwasserhuette.gpx',
'files/gpx/Schitour/Project/Panic0_A10_Mahdtaltour.gpx',
'files/gpx/Schitour/Project/Panic0_A2_OchsenhoferKoepfe.gpx',
'files/gpx/Schitour/Project/Panic0_A3_Gruenhorn.gpx',
'files/gpx/Schitour/Project/Panic0_A4_Steinmandl.gpx',
'files/gpx/Schitour/Project/Panic0_A5_FalzerKopf.gpx',
'files/gpx/Schitour/Project/Panic0_A6_1_Haehlekopf_Sued.gpx',
'files/gpx/Schitour/Project/Panic0_A6_2_Haehlekopf_Ost.gpx',
'files/gpx/Schitour/Project/Panic0_A7_Berlingerskoepfle.gpx',
'files/gpx/Schitour/Project/Panic0_A8_1_IfenSued.gpx',
'files/gpx/Schitour/Project/Panic0_A8_2_IfenNord.gpx',
'files/gpx/Schitour/Project/Panic0_A9_1_Toreck.gpx',
'files/gpx/Schitour/Project/Panic0_A9_2_ToreckIfenbahn.gpx',
'files/gpx/Schitour/Project/Panic0_B1_Gruenhorn.gpx',
'files/gpx/Schitour/Project/Panic0_B2_1_GuentlespitzeNordost.gpx',
'files/gpx/Schitour/Project/Panic0_B2_2_GuentlespitzeSuedost.gpx',
'files/gpx/Schitour/Project/Panic0_B2_3_GuentlespitzeAbfahrtSchoppernau.gpx',
'files/gpx/Schitour/Project/Panic0_B3_Uentschenspitze.gpx',
'files/gpx/Schitour/Project/Panic0_B4_1_UnspitzeDerrarinne.gpx',
'files/gpx/Schitour/Project/Panic0_B4_Unspitze.gpx',
'files/gpx/Schitour/Project/Panic0_B5_Gamsfuss.gpx',
'files/gpx/Schitour/Project/Panic0_B6_Hoeferspitze.gpx',
'files/gpx/Schitour/Project/Panic0_B7_WeisserSchrofen.gpx',
'files/gpx/Schitour/Project/Panic0_B8_Widderstein.gpx',
'files/gpx/Schitour/Project/Panic0_B9_1_KarlstorOstabfahrt.gpx',
'files/gpx/Schitour/Project/Panic0_B9_Karlstor.gpx',
'files/gpx/Schitour/Project/Panic0_C1_Geisshorn.gpx',
'files/gpx/Schitour/Project/Panic0_C10_MittlererSchafalpenkopf.gpx',
'files/gpx/Schitour/Project/Panic0_C10_MittlererSchafalpenkopfFiderepass.gpx',
'files/gpx/Schitour/Project/Panic0_C11_Kuhgehrenspitze.gpx',
'files/gpx/Schitour/Project/Panic0_C2_1_LiechelkopfWildental.gpx',
'files/gpx/Schitour/Project/Panic0_C2_2_LiechelkopfGemsteltal.gpx',
'files/gpx/Schitour/Project/Panic0_C3_1_ElferkopfGemsteltal.gpx',
'files/gpx/Schitour/Project/Panic0_C3_2_Winterelfer.gpx',
'files/gpx/Schitour/Project/Panic0_C3_3_Elferrinne.gpx',
'files/gpx/Schitour/Project/Panic0_C4_MittlererSchafalpkopf.gpx',
'files/gpx/Schitour/Project/Panic0_C5_Hochgehrenspitze.gpx',
'files/gpx/Schitour/Project/Panic0_C6_1_FiderepassWildental.gpx',
'files/gpx/Schitour/Project/Panic0_C6_2_FiderepassStillachtal.gpx',
'files/gpx/Schitour/Project/Panic0_C6_3_FiderepassKanzelwand.gpx',
'files/gpx/Schitour/Project/Panic0_C7_1_AlpgundkopfStillachtal.gpx',
'files/gpx/Schitour/Project/Panic0_C7_1_AlpgundOstabfahrt.gpx',
'files/gpx/Schitour/Project/Panic0_C8_1_MindelheimerHuetteWildental.gpx',
'files/gpx/Schitour/Project/Panic0_C8_2_MindelheimerHuetteGemsteltal.gpx',
'files/gpx/Schitour/Project/Panic0_C8_3_MindelheimerHuetteVomFiderepass.gpx',
'files/gpx/Schitour/Project/Panic0_C9_1_NoerdlicherSchafalpenkopfUeberschreitung.gpx',
'files/gpx/Schitour/Project/Panic0_D1_1_RappenseehuetteVonNorden.gpx',
'files/gpx/Schitour/Project/Panic0_D1_2_RappenseehuetteVonSueden.gpx',
'files/gpx/Schitour/Project/Panic0_D1_3_RappenseehuetteVonLechleiten.gpx',
'files/gpx/Schitour/Project/Panic0_D10_Bockkar.gpx',
'files/gpx/Schitour/Project/Panic0_D11_KreuzeckRaueck.gpx',
'files/gpx/Schitour/Project/Panic0_D2_1_Rappenseekopf.gpx',
'files/gpx/Schitour/Project/Panic0_D2_2_Rothgundspitze.gpx',
'files/gpx/Schitour/Project/Panic0_D2_3_HohesLicht.gpx',
'files/gpx/Schitour/Project/Panic0_D4_1_Muttlerkopf.gpx',
'files/gpx/Schitour/Project/Panic0_D4_2_Hornbachspitze.gpx',
'files/gpx/Schitour/Project/Panic0_D4_3_GrosserKrottenkopf.gpx',
'files/gpx/Schitour/Project/Panic0_D5_1_Kratzerfeld.gpx',
'files/gpx/Schitour/Project/Panic0_D5_Kratzer.gpx',
'files/gpx/Schitour/Project/Panic0_D6_2_Trettachrinne.gpx',
'files/gpx/Schitour/Project/Panic0_D6_3_MaedelegabelHolzgau.gpx',
'files/gpx/Schitour/Project/Panic0_D6_Maedelegabel.gpx',
'files/gpx/Schitour/Project/Panic0_D7_Heilbronnerweg.gpx',
'files/gpx/Schitour/Project/Panic0_D8_Linkerskopf.gpx',
'files/gpx/Schitour/Project/Panic0_D9_1_TrettachEinstieg.gpx',
'files/gpx/Schitour/Project/Panic0_D9_Wildengundkopf.gpx',
'files/gpx/Schitour/Project/Panic0_E0_OytalBisKaeseralpe.gpx',
'files/gpx/Schitour/Project/Panic0_E1_Aelpelesattel.gpx',
'files/gpx/Schitour/Project/Panic0_E2_RotesLoch.gpx',
'files/gpx/Schitour/Project/Panic0_E3_1_RauheckAelpelesattel.gpx',
'files/gpx/Schitour/Project/Panic0_E3_2_RauheckEisseeNordgrat.gpx',
'files/gpx/Schitour/Project/Panic0_E3_3_RauheckLechlerKanz.gpx',
'files/gpx/Schitour/Project/Panic0_E4_1_JochspitzeAbfahrtLechlerKanz.gpx',
'files/gpx/Schitour/Project/Panic0_E4_Hoellhorn.gpx',
'files/gpx/Schitour/Project/Panic0_E4_JochspitzeAufstieg.gpx',
'files/gpx/Schitour/Project/Panic0_E5_WildenfeldscharteGrosserWilder.gpx',
'files/gpx/Schitour/Project/Panic0_E6_Schneck.gpx',
'files/gpx/Schitour/Project/Panic0_F3_1_GrSeekopf.gpx',
'files/gpx/Schitour/Project/Panic0_F4_Laufbacher_Eck_vom_Neblehorn.gpx',
'files/gpx/Schitour/Project/Panic0_F5_3_Daumen_Retterschwang.gpx',
'files/gpx/Schitour/Project/Panic0_F6_1_Abfahrt_Laufbacherecke_ins_Oytal.gpx',
'files/gpx/Schitour/Project/Panic0_F6_1_Abfahrt_Laufbacherecke_nach_Osten.gpx',
'files/gpx/Schitour/Project/Panic0_F6_Rubinger_Houte_Route_Entschen.gpx',
'files/gpx/Schitour/Project/Panic0_G1_Schwarzenberghuette.gpx',
'files/gpx/Schitour/Project/Panic0_G10_1_Glasfelderkopf.gpx',
'files/gpx/Schitour/Project/Panic0_G10_2_Kesselspitze.gpx',
'files/gpx/Schitour/Project/Panic0_G10_3_Bockkarscharte_Erzbergtal.gpx',
'files/gpx/Schitour/Project/Panic0_G10_4_Fuchskarumrundung.gpx',
'files/gpx/Schitour/Project/Panic0_G11_1_Kreuzkopf.gpx',
'files/gpx/Schitour/Project/Panic0_G11_2_Weittalkopf.gpx',
'files/gpx/Schitour/Project/Panic0_G12_1_Hochvogel_Kalter_Winkel.gpx',
'files/gpx/Schitour/Project/Panic0_G12_2_Hochvogel-Kreuzkopf.gpx',
'files/gpx/Schitour/Project/Panic0_G13_2_Schaenzle.gpx',
'files/gpx/Schitour/Project/Panic0_G13_2_Schaenzlekopf.gpx',
'files/gpx/Schitour/Project/Panic0_G13_2_Schaenzlespitze.gpx',
'files/gpx/Schitour/Project/Panic0_G13_3_Lahnerkopf.gpx',
'files/gpx/Schitour/Project/Panic0_G13_4_Lahnerkopfueberschreitung.gpx',
'files/gpx/Schitour/Project/Panic0_G13_Erzbergtal.gpx',
'files/gpx/Schitour/Project/Panic0_G6_1_Laufbacher_Eck_Obertal.gpx',
'files/gpx/Schitour/Project/Panic0_G6_2 _Laufbacher_Eck_Baerguendeletal.gpx',
'files/gpx/Schitour/Project/Panic0_G7_Schneck.gpx',
'files/gpx/Schitour/Project/Panic0_G9_Prinz-Luitpold-Haus.gpx',
'files/gpx/Schitour/Project/Panic0_H1_Rauhhorn.gpx',
'files/gpx/Schitour/Project/Panic0_H1_Willersalpe.gpx',
'files/gpx/Schitour/Project/Panic0_H2_1_Gaishorn.gpx',
'files/gpx/Schitour/Project/Panic0_H2_2_Zirleseck.gpx',
'files/gpx/Schitour/Project/Panic0_H2_3_Rohnenspitze .gpx',
'files/gpx/Schitour/Project/Panic0_H2_4Ponten.gpx',
'files/gpx/Schitour/Project/Panic0_H3_1_Heubatspitze_Abfahrt_Norden_1.gpx',
'files/gpx/Schitour/Project/Panic0_H3_1_Heubatspitze_Abfahrt_Norden_2.gpx',
'files/gpx/Schitour/Project/Panic0_H3_Heubatspitze.gpx',
'files/gpx/Schitour/Project/Panic0_H4_Rotspitze.gpx',
'files/gpx/Schitour/Project/Panic0_H5_Kleiner_Daumen.gpx',
'files/gpx/Schitour/Project/Panic0_H6_1_Entschenkopf_Abfahrt_Norden.gpx',
'files/gpx/Schitour/Project/Panic0_H6_Entschenkopf.gpx',
'files/gpx/Schitour/Project/Panic0_I1_1_Kuehgund_Schattwald.gpx',
'files/gpx/Schitour/Project/Panic0_I1_2_Iseler_Oberjoch.gpx',
'files/gpx/Schitour/Project/Panic0_I1_3_Iselerkar.gpx',
'files/gpx/Schitour/Project/Panic0_I1_4_Iseler_Schattwald.gpx',
'files/gpx/Schitour/Project/Panic0_I1_5_Iseler_Rohnenspitze.gpx',
'files/gpx/Schitour/Project/Panic0_I10_Schochenspitze.gpx',
'files/gpx/Schitour/Project/Panic0_I11_Landsberger_Huette.gpx',
'files/gpx/Schitour/Project/Panic0_I12_1_Rote_Spitze.gpx',
'files/gpx/Schitour/Project/Panic0_I12_2_Steinkarspitze.gpx',
'files/gpx/Schitour/Project/Panic0_I12_3_Lachenspitze.gpx',
'files/gpx/Schitour/Project/Panic0_I12_4_Schochenspitze.gpx',
'files/gpx/Schitour/Project/Panic0_I13_Rauhhorn.gpx',
'files/gpx/Schitour/Project/Panic0_I14_Aggenstein.gpx',
'files/gpx/Schitour/Project/Panic0_I2_2_Bschiesser_Nordosten.gpx',
'files/gpx/Schitour/Project/Panic0_I4_Zirleseck.gpx',
'files/gpx/Schitour/Project/Panic0_I5_1_Rohnenspitze_Nordwestruecken.gpx',
'files/gpx/Schitour/Project/Panic0_I5_2_Rohnenspitze_Zirleseck.gpx',
'files/gpx/Schitour/Project/Panic0_I5_3_Rohnenspitze_Nordabfahrt.gpx',
'files/gpx/Schitour/Project/Panic0_I6_1_Gaishorn_Vilsalpsee.gpx',
'files/gpx/Schitour/Project/Panic0_I7_1_Sulzspitze_Haldensee.gpx',
'files/gpx/Schitour/Project/Panic0_I8_Litnisschrofen.gpx',
'files/gpx/Schitour/Project/Panic0_I9_Krinnenspitze.gpx',
'files/gpx/Schitour/Project/Panic0_J1_Reuter_Wanne.gpx',
'files/gpx/Schitour/Project/Panic0_J2_Wertacher_Hoernle.gpx',
'files/gpx/Schitour/Project/Panic0_J3_Ornach.gpx',
'files/gpx/Schitour/Project/Panic0_J4_1_Spieser_Sueden.gpx',
'files/gpx/Schitour/Project/Panic0_J4_2_Spieser_Unterjoch.gpx',
'files/gpx/Schitour/Project/Panic0_J5_1_Abfahrt_Heidelbeerkopf.gpx',
'files/gpx/Schitour/Project/Panic0_J5_Sonnenkopf_Heidelbeerkopf.gpx',
'files/gpx/Schitour/Project/Panic0_J6_Schnippenkopf.gpx',
'files/gpx/Schitour/Project/Panic0_J7_Entschenkopf.gpx',
'files/gpx/Schitour/Project/Panic0_J8_Zwoelferkopf.gpx',
'files/gpx/Schitour/Project/Panic0_J9_Gruenten.gpx',
'files/gpx/Schitour/Project/Panic0_K2_1_Riedberger_Horn_Bolgental.gpx',
'files/gpx/Schitour/Project/Panic0_K2_2_Riedberger_Horn_Schwabenhof.gpx',
'files/gpx/Schitour/Project/Panic0_K2_Riedberger_Horn_Sued.gpx',
'files/gpx/Schitour/Project/Panic0_K2_Riedberger_Horn_Suedost.gpx',
'files/gpx/Schitour/Project/Panic0_K3_Siplinger_Kopf.gpx',
'files/gpx/Schitour/Project/Panic0_K4_Heidenkopf.gpx',
'files/gpx/Schitour/Project/Panic0_K5_Girenkopf.gpx',
'files/gpx/Schitour/Project/Panic0_K6_Gr_Balderschwangrunde_Girenkopf_Siplinger.gpx',
'files/gpx/Schitour/Project/Panic0_K7_Burstkopf_Feuerstaetter_Kopf.gpx',
'files/gpx/Schitour/Project/Panic0_K8_Hochgrat_Balderschwang.gpx',
'files/gpx/Schitour/Project/Panic0_L1_Wannenkopf.gpx',
'files/gpx/Schitour/Project/Panic0_L10_Immenstaedter_Horn.gpx',
'files/gpx/Schitour/Project/Panic0_L11_Gschwender_Horn.gpx',
'files/gpx/Schitour/Project/Panic0_L12_1Stuiben_Immenstadt.gpx',
'files/gpx/Schitour/Project/Panic0_L12_2_Stuiben_Gschwender Horn.gpx',
'files/gpx/Schitour/Project/Panic0_L13_1_Rindalphorn_Hochgrat.gpx',
'files/gpx/Schitour/Project/Panic0_L13_2_Rindalphorn_Brunnenauscharte.gpx',
'files/gpx/Schitour/Project/Panic0_L13_3_Rindalphorn_Nordosten.gpx',
'files/gpx/Schitour/Project/Panic0_L14_Nagelfluhkette.gpx',
'files/gpx/Schitour/Project/Panic0_L15_Seelekopf.gpx',
'files/gpx/Schitour/Project/Panic0_L16_Eineguntkopf.gpx',
'files/gpx/Schitour/Project/Panic0_L2_1_Rangiswanger_Horn_Sigiswang.gpx',
'files/gpx/Schitour/Project/Panic0_L2_2_Rangiswanger_Horn_Ostertal.gpx',
'files/gpx/Schitour/Project/Panic0_L3_1_Gr_Ochsenkpf_Rangiswanger_Horn.gpx',
'files/gpx/Schitour/Project/Panic0_L3_2_Ochsenkopf_Hoernerbahn.gpx',
'files/gpx/Schitour/Project/Panic0_L3_Gr_Ochsenkopf_Ostertal.gpx',
'files/gpx/Schitour/Project/Panic0_L4_1_Riedberger_Horn_Bolgental.gpx',
'files/gpx/Schitour/Project/Panic0_L4_2_Riedberger_Hoernerbahn.gpx',
'files/gpx/Schitour/Project/Panic0_L4_3_Riedberger_Horn_Ostertal.gpx',
'files/gpx/Schitour/Project/Panic0_L5_Hoernertour.gpx',
'files/gpx/Schitour/Project/Panic0_L6_1_Blaicher_Horn_Gunzesried.gpx',
'files/gpx/Schitour/Project/Panic0_L6_2_Blaicher_Horn_Ostertal.gpx',
'files/gpx/Schitour/Project/Panic0_L6_3_Hoellritzer_Eck.gpx',
'files/gpx/Schitour/Project/Panic0_L7_1_Tennenmooskopf.gpx',
'files/gpx/Schitour/Project/Panic0_L7_Tennenmooskopf.gpx',
'files/gpx/Schitour/Project/Panic0_L8_Steinberg.gpx',
'files/gpx/Schitour/Project/Panic0_L9_Buraltalkopf.gpx']

var Schitour = ['files/gpx/Schitour/ST_2016_biet_weglosen.gpx',
'files/gpx/Schitour/ST_2016_ober_kamorschitour.gpx',
'files/gpx/Schitour/ST_2017_Innerlatenrns.gpx',
'files/gpx/Schitour/ST_201711_LindauHutte.gpx',
'files/gpx/Schitour/ST_2018_Fullfirst.gpx',
'files/gpx/Schitour/ST_2018_Gross-Chaerpf.gpx',
'files/gpx/Schitour/ST_201901_Gamperdun.gpx',
'files/gpx/Schitour/ST_201901_Stockberg.gpx',
'files/gpx/Schitour/ST_201902_Schneeglocke.gpx',
'files/gpx/Schitour/ST_201903_Klostertaler-Egghorn.gpx',
'files/gpx/Schitour/ST_201903_Sonntagspitze.gpx',
'files/gpx/Schitour/ST_201911_Stotzigen_Firsten.gpx',
'files/gpx/Schitour/ST_202101_Rangiswangerhorn.gpx',
'files/gpx/Schitour/ST_202101_Rindalphorn.gpx',
'files/gpx/Schitour/ST_202101_Sylvester_001.gpx',
'files/gpx/Schitour/ST_202101_Sylvester_002.gpx',
'files/gpx/Schitour/ST_202101_Wannenkopf.gpx',
'files/gpx/Schitour/ST_20210116_Rottachberg.gpx',
'files/gpx/Schitour/ST_202102_Heubatspitze.gpx']

var SchneeSProject = ['files/gpx/SchneeS/Project/P_SW_Malans-Tschugga.gpx',
'files/gpx/SchneeS/Project/P_SW_Mattner_first.gpx',
'files/gpx/SchneeS/Project/P_SW_Nussen_innertal.gpx',
'files/gpx/SchneeS/Project/P_SW_Silberen.gpx',
'files/gpx/SchneeS/Project/P_SW_Wilhaus_1.gpx']


import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Card from "primevue/card";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Tag from "primevue/tag";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(PrimeVue, { ripple: true });
	nuxtApp.vueApp.component("Button", Button);
	nuxtApp.vueApp.component("Card", Card);
	nuxtApp.vueApp.component("Accordion", Accordion);
	nuxtApp.vueApp.component("AccordionTab", AccordionTab);
	nuxtApp.vueApp.component("Tag", Tag);
	nuxtApp.vueApp.component("InputText", InputText);
	nuxtApp.vueApp.component("Toast", Toast);
});

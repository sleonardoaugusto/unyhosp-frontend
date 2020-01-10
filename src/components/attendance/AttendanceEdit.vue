<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center flex-column">
    <div class="col-md-6 mb-3">
      <div class="row">
        <h2 class="type-h4 type-blue-smoke">Editar atendimento</h2>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row d-flex flex-column mb-3">
        <label for="PacientName">Nome:</label>
        <input type="text" id="PacientName" v-model="attendance.pacient.name">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Entry">Dias de UTI:</label>
        <input type="text" id="Entry" v-model="attendance.created">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Age">Idade:</label>
        <input type="text" id="Age" v-model="attendance.pacient.age">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="HMA">HMA</label>
        <input type="text" id="HMA" v-model="attendance.hma">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="EntryReason">Motivo da Admissão:</label>
        <input type="text" id="EntryReason" v-model="attendance.entry_reason">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Comorbidity">Comorbidades</label>
        <input type="text" id="Comorbidity" v-model="attendance.comorbidity">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="ATB">ATB:</label>
        <input type="text" id="ATB" v-model="attendance.atb">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="HD">HD:</label>
        <input type="text" id="HD" v-model="attendance.hd">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="MedicinesInUse">Medicamentos em uso:</label>
        <input type="text" id="MedicinesInUse" v-model="attendance.medicines_in_use">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="PreviousPathologies">Patologias Prévias:</label>
        <input type="text" id="PreviousPathologies" v-model="attendance.previous_pathologies">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Allergies">Alergias:</label>
        <input type="text" id="Allergies" v-model="attendance.allergies">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Cultures">Culturas:</label>
        <input type="text" id="Cultures" v-model="attendance.cultures">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="VasoactiveDrugs">Drogas Vasoativas:</label>
        <input type="text" id="VasoactiveDrugs" v-model="attendance.vasoactive_drugs">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Sedation">Sedação:</label>
        <input type="text" id="Sedation" v-model="attendance.sedation">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="VenousAccess">Acesso Venoso:</label>
        <input type="text" id="VenousAccess" v-model="attendance.venous_access">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Diet">Dieta:</label>
        <input type="text" id="Diet" v-model="attendance.diet">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="ProbesAndDrains">Sondas e Drenos:</label>
        <input type="text" id="ProbesAndDrains" v-model="attendance.probes_and_drains">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Ventilation">Ventilação:</label>
        <input type="text" id="Ventilation" v-model="attendance.ventilation">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="Complications">Complicações:</label>
        <input type="text" id="Complications" v-model="attendance.complications">
      </div>
      <div class="row d-flex flex-column mb-3">
        <label for="TherapeuticPlan">Plano Terapêutico</label>
        <input type="text" id="TherapeuticPlan" v-model="attendance.therapeutic_plan">
      </div>
      <div
        class="row d-flex flex-column mb-3"
        v-for="(c, i) in attendance.comments"
        :key="i"
      >
        <div class="card m-0">
          <div class="card__text-content">{{ c.text }}</div>
          <div class="card__author">{{c.author}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hospitalId'],
  name: 'AttendanceEdit',
  data: () => ({
    attendance: {
      created: '',
      entry_reason: '',
      hma: '',
      comorbidity: '',
      atb: '',
      hd: '',
      medicines_in_use: '',
      previous_pathologies: '',
      allergies: '',
      cultures: '',
      vasoactive_drugs: '',
      sedation: '',
      venous_access: '',
      diet: '',
      probes_and_drains: '',
      ventilation: '',
      complications: '',
      therapeutic_plan: '',
      pacient: {
        name: '',
        age: ''
      }
    }
  })
}
</script>

<style lang="scss">

</style>
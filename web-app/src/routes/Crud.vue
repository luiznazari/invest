<template>
  <div style="margin:20px;">
    <!--
    <h1 style="text-align:center">CRUD configuration</h1>
    <v-layout row wrap>
      <v-flex xs12 md6 lg3 px-5>
        <v-text-field label="Details title" v-model="detailsTitle"></v-text-field>
        <v-select label="Delete mode" :items="['none', 'soft', 'hard', 'both', 'filter']"
          v-model="deleteMode"></v-select>
        <v-switch color="green" label="Refresh button" v-model="refreshButton"></v-switch>
      </v-flex>

      <v-flex xs12 md6 lg3 px-5>
        <v-switch color="green" label="Export button" v-model="exportButton"></v-switch>
        <v-switch color="green" label="Field filters" v-model="fieldFilters"></v-switch>
        <v-switch color="green" label="Main filter" v-model="mainFilter"></v-switch>
      </v-flex>

      <v-flex xs12 md6 lg3 px-5>
        <v-switch color="green" label="Create mode" v-model="createMode"></v-switch>
        <v-switch color="green" label="Edit mode" v-model="editMode"></v-switch>
        <v-switch color="green" label="Edit button" v-model="editButton"></v-switch>
      </v-flex>

      <v-flex xs12 md6 lg3 px-5>
        <v-switch color="green" label="Select many mode" v-model="selectManyMode"></v-switch>
        <v-switch color="green" label="Update many mode" v-model="updateManyMode"></v-switch>
        <v-switch color="green" label="Remove many mode" v-model="removeManyMode"></v-switch>
      </v-flex>
    </v-layout>
    -->
    <h1 style="text-align:center">CRUD</h1>
    <crud
      primary-key="id"
      :prefix="prefix"
      :path="path"
      :page-title="pageTitle"
      :fields-info="fieldsInfo"
      :details-title="detailsTitle"
      :delete-mode="deleteMode"
      :refresh-button="refreshButton"
      :export-button="exportButton"
      :field-filters="fieldFilters"
      :main-filter="mainFilter"
      :create-mode="createMode"
      :edit-mode="editMode"
      :edit-button="editButton"
      :select-many-mode="selectManyMode"
      :update-many-mode="updateManyMode"
      :remove-many-mode="removeManyMode"
    >
    </crud>
    <alert-box></alert-box>
  </div>
</template>

<script>
import Crud from '@/utils/crud/components/Crud.vue'
import AlertBox from '@/utils/app/components/AlertBox.vue'

export default {
  data () {
    return {
      prefix: 'v1',
      path: 'investments',
      pageTitle: 'demo.tasks',
      detailsTitle: '',
      deleteMode: 'hard',
      refreshButton: true,
      exportButton: false,
      fieldFilters: true,
      mainFilter: true,
      createMode: true,
      editMode: true,
      editButton: true,
      selectManyMode: false,
      updateManyMode: false,
      removeManyMode: false,
    }
  },
  created () {
    this.detailsTitle = this.$t('detailsTitle')
  },
  computed: {
    fieldsInfo () {
      return [
        {
          type: 'input',
          column: 'id',
          create: false,
          edit: false,
          table: false,
          name: 'id',
        },
        {
          type: 'select',
          column: 'tenant_id',
          text: this.$t('fields.tenant'),
          create: true,
          edit: false,
          table: false,
          name: 'tenant_id',
          stringId: true,
          list: {
            value: 'id',
            text: 'name',
            data: [{ id: 'd06b7ada-8991-4e2e-8c87-3cbfc4471d81', name: 'Principal' }],
          },
        },
        {
          type: 'select',
          column: 'type',
          text: this.$t('fields.type'),
          name: 'type',
          stringId: true,
          list: {
            value: 'id',
            text: 'name',
            data: [
              { id: 'STOCK', name: 'Stock' },
              { id: 'BOND', name: 'Bond' },
              { id: 'INVESTMENT_FUND', name: 'Investment Fund' },
              { id: 'BANK_PRODUCT', name: 'Bank Product' },
              { id: 'OPTION', name: 'Option' },
              { id: 'ANNUITIE', name: 'Annuitie' },
              { id: 'RETIREMENT', name: 'Retirement' },
              { id: 'SAVING_FOR_EDUCATION', name: 'Saving for Education' },
              { id: 'ALTERNATIVE_AND_COMPLEX_PRODUCT', name: 'Alternative and Complex Product' },
              { id: 'CRYPTOCURRENCY', name: 'Initial Coin Offerings and Cryptocurrency' },
              { id: 'COMMODITY_FUTURE', name: 'Commodity Future' },
              { id: 'SECURITY_FUTURE', name: 'Security Future' },
              { id: 'INSURANCE', name: 'Insurance' },
            ],
          },
        },
        {
          type: 'input',
          column: 'name',
          text: this.$t('fields.name'),
          name: 'name',
        },
        {
          type: 'select',
          column: 'operation_type',
          text: this.$t('fields.operationType'),
          name: 'operation_type',
          stringId: true,
          list: {
            value: 'id',
            text: 'name',
            data: [
              { id: 'BUY', name: 'Buy' },
              { id: 'SELL', name: 'Sell' },
            ],
          },
        },
        {
          type: 'decimal',
          column: 'value',
          text: this.$t('fields.value'),
          name: 'value',
        },
        {
          type: 'number',
          column: 'quantity',
          text: this.$t('fields.quantity'),
          name: 'quantity',
        },
        {
          type: 'datetime',
          column: 'date_time',
          text: this.$t('fields.operationDate'),
          name: 'date_time',
        },
      ]
    },
  },
  components: {
    Crud,
    AlertBox,
  },
  i18n: {
    messages: {
      en: {
        detailsTitle: 'Task',
        fields: {
          id: 'Id',
          tenant: 'Tenant',
          name: 'Name',
          type: 'Type',
          value: 'Value',
          quantity: 'Quantity',
          operationDate: 'Operation date',
          operationType: 'Operation',
        },
      },
    },
  },
}

</script>

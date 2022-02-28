<template lang="">
    <div class="form-group">
         <label :for="Id">{{ title }}</label>         
         <input :id="Id" 
                :type="type" 
                :class="[form-control, typePassword]" 
                :value="value"
                :placeholder="placeholder" 
                :disabled="isDisabled"
                :required="isRequired" 
                :autofocus='isAutofocus'>
         
         <div v-if="invalidFeedback" class="invalid-feedback">
               {{ invalidFeedback }}
         </div>           
    </div>
</template>
<script>
export default {
    name:"input-component",
    props:{
      type: {
      type: String,
      default: 'text'
    },
     advanced: {
       validator : function(value) {
         return ['phone-number',
                 'currency',
                 'purchase-code',
                 'datemask',
                 'creditcard',
                 'inputtags'].indexOf(value) !== -1
       }
     },
    Id: {
      type: String
    },
    placeholder: {
      type: String,
      default: 'Enter Text...'
    },
    size: {
      type: String
    },
    value: {
      type: String
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    isAutofocus: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    invalidFeedback:{
       type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: String
    }  
    },
    computed: {
      typePassword () {
        return (this.type == "password") ? 'pwstrength' : '' 
      }
    }    
}
</script>

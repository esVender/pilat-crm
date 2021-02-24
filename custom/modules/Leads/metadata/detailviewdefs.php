<?php
$viewdefs ['Leads'] = 
array (
  'DetailView' => 
  array (
    'templateMeta' => 
    array (
      'form' => 
      array (
        'buttons' => 
        array (
          'SEND_CONFIRM_OPT_IN_EMAIL' => 
          array (
            'customCode' => '<input type="submit" class="button hidden" disabled="disabled" title="{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}" onclick="this.form.return_module.value=\'Leads\'; this.form.return_action.value=\'Leads\'; this.form.return_id.value=\'{$fields.id.value}\'; this.form.action.value=\'sendConfirmOptInEmail\'; this.form.module.value=\'Leads\'; this.form.module_tab.value=\'Leads\';" name="send_confirm_opt_in_email" value="{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}"/>',
            'sugar_html' => 
            array (
              'type' => 'submit',
              'value' => '{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}',
              'htmlOptions' => 
              array (
                'class' => 'button hidden',
                'id' => 'send_confirm_opt_in_email',
                'title' => '{$APP.LBL_SEND_CONFIRM_OPT_IN_EMAIL}',
                'onclick' => 'this.form.return_module.value=\'Leads\'; this.form.return_action.value=\'DetailView\'; this.form.return_id.value=\'{$fields.id.value}\'; this.form.action.value=\'sendConfirmOptInEmail\'; this.form.module.value=\'Leads\'; this.form.module_tab.value=\'Leads\';',
                'name' => 'send_confirm_opt_in_email',
                'disabled' => true,
              ),
            ),
          ),
          0 => 'EDIT',
          1 => 'DUPLICATE',
          2 => 'DELETE',
          3 => 
          array (
            'customCode' => '{if $bean->aclAccess("edit") && !$DISABLE_CONVERT_ACTION}<input title="{$MOD.LBL_CONVERTLEAD_TITLE}" accessKey="{$MOD.LBL_CONVERTLEAD_BUTTON_KEY}" type="button" class="button" onClick="document.location=\'index.php?module=Leads&action=ConvertLead&record={$fields.id.value}\'" name="convert" value="{$MOD.LBL_CONVERTLEAD}">{/if}',
            'sugar_html' => 
            array (
              'type' => 'button',
              'value' => '{$MOD.LBL_CONVERTLEAD}',
              'htmlOptions' => 
              array (
                'title' => '{$MOD.LBL_CONVERTLEAD_TITLE}',
                'accessKey' => '{$MOD.LBL_CONVERTLEAD_BUTTON_KEY}',
                'class' => 'button',
                'onClick' => 'document.location=\'index.php?module=Leads&action=ConvertLead&record={$fields.id.value}\'',
                'name' => 'convert',
                'id' => 'convert_lead_button',
              ),
              'template' => '{if $bean->aclAccess("edit") && !$DISABLE_CONVERT_ACTION}[CONTENT]{/if}',
            ),
          ),
          4 => 'FIND_DUPLICATES',
          5 => 
          array (
            'customCode' => '<input title="{$APP.LBL_MANAGE_SUBSCRIPTIONS}" class="button" onclick="this.form.return_module.value=\'Leads\'; this.form.return_action.value=\'DetailView\';this.form.return_id.value=\'{$fields.id.value}\'; this.form.action.value=\'Subscriptions\'; this.form.module.value=\'Campaigns\'; this.form.module_tab.value=\'Leads\';" type="submit" name="Manage Subscriptions" value="{$APP.LBL_MANAGE_SUBSCRIPTIONS}">',
            'sugar_html' => 
            array (
              'type' => 'submit',
              'value' => '{$APP.LBL_MANAGE_SUBSCRIPTIONS}',
              'htmlOptions' => 
              array (
                'title' => '{$APP.LBL_MANAGE_SUBSCRIPTIONS}',
                'class' => 'button',
                'id' => 'manage_subscriptions_button',
                'onclick' => 'this.form.return_module.value=\'Leads\'; this.form.return_action.value=\'DetailView\';this.form.return_id.value=\'{$fields.id.value}\'; this.form.action.value=\'Subscriptions\'; this.form.module.value=\'Campaigns\'; this.form.module_tab.value=\'Leads\';',
                'name' => '{$APP.LBL_MANAGE_SUBSCRIPTIONS}',
              ),
            ),
          ),
          'AOS_GENLET' => 
          array (
            'customCode' => '<input type="button" class="button" onClick="showPopup();" value="{$APP.LBL_PRINT_AS_PDF}">',
          ),
        ),
        'headerTpl' => 'modules/Leads/tpls/DetailViewHeader.tpl',
      ),
      'maxColumns' => '2',
      'widths' => 
      array (
        0 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
        1 => 
        array (
          'label' => '10',
          'field' => '30',
        ),
      ),
      'includes' => 
      array (
        0 => 
        array (
          'file' => 'modules/Leads/Lead.js',
        ),
      ),
      'useTabs' => false,
      'tabDefs' => 
      array (
        'LBL_CONTACT_INFORMATION' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_PANEL_ADVANCED' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_EDITVIEW_PANEL1' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
        'LBL_PANEL_ASSIGNMENT' => 
        array (
          'newTab' => false,
          'panelDefault' => 'expanded',
        ),
      ),
      'syncDetailEditViews' => true,
    ),
    'panels' => 
    array (
      'LBL_CONTACT_INFORMATION' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'first_name',
            'comment' => 'First name of the contact',
            'label' => 'LBL_FIRST_NAME',
          ),
          1 => 
          array (
            'name' => 'last_name',
            'comment' => 'Last name of the contact',
            'label' => 'LBL_LAST_NAME',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'numero_documento_c',
            'label' => 'LBL_NUMERO_DOCUMENTO',
          ),
          1 => 
          array (
            'name' => 'extension_documento_c',
            'studio' => 'visible',
            'label' => 'LBL_EXTENSION_DOCUMENTO',
          ),
        ),
        2 => 
        array (
          0 => 'description',
          1 => '',
        ),
        3 => 
        array (
          0 => 'phone_mobile',
          1 => 
          array (
            'name' => 'tiene_whatsapp_c',
            'label' => 'LBL_TIENE_WHATSAPP_C',
          ),
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'phone_mobil_2_c',
            'label' => 'LBL_PHONE_MOBIL_2_C',
          ),
          1 => 
          array (
            'name' => 'phone_mobil_3_c',
            'label' => 'LBL_PHONE_MOBIL_3_C',
          ),
        ),
        5 => 
        array (
          0 => 'email1',
        ),
        6 => 
        array (
          0 => 
          array (
            'name' => 'pais_c',
            'studio' => 'visible',
            'label' => 'LBL_PAIS_C',
          ),
          1 => 
          array (
            'name' => 'departamento_c',
            'studio' => 'visible',
            'label' => 'LBL_DEPARTAMENTO_C',
          ),
        ),
        7 => 
        array (
          0 => 
          array (
            'name' => 'ciudad_c',
            'studio' => 'visible',
            'label' => 'LBL_CIUDAD_C',
          ),
          1 => 
          array (
            'name' => 'direccion_c',
            'label' => 'LBL_DIRECCION_C',
          ),
        ),
        8 => 
        array (
          0 => 
          array (
            'name' => 'birthdate',
            'comment' => 'The birthdate of the contact',
            'label' => 'LBL_BIRTHDATE',
          ),
          1 => 
          array (
            'name' => 'sexo_c',
            'studio' => 'visible',
            'label' => 'LBL_SEXO_C',
          ),
        ),
      ),
      'LBL_PANEL_ADVANCED' => 
      array (
        0 => 
        array (
          0 => 'status',
          1 => 'status_description',
        ),
        1 => 
        array (
          0 => 'lead_source',
          1 => 'lead_source_description',
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'rubro_c',
            'studio' => 'visible',
            'label' => 'LBL_RUBRO_C',
          ),
          1 => 
          array (
            'name' => 'actividad_c',
            'studio' => 'visible',
            'label' => 'LBL_ACTIVIDAD_C',
          ),
        ),
        3 => 
        array (
          0 => 
          array (
            'name' => 'nuevo_rubro_c',
            'label' => 'LBL_NUEVO_RUBRO_C',
          ),
          1 => '',
        ),
        4 => 
        array (
          0 => 
          array (
            'name' => 'tipo_lead_c',
            'studio' => 'visible',
            'label' => 'LBL_TIPO_LEAD_C',
          ),
          1 => 
          array (
            'name' => 'fecha_validex_c',
            'label' => 'LBL_FECHA_VALIDEX_C',
          ),
        ),
        5 => 
        array (
          0 => 
          array (
            'name' => 'tipo_cliente_c',
            'studio' => 'visible',
            'label' => 'LBL_TIPO_CLIENTE_C',
          ),
          1 => 
          array (
            'name' => 'etapas_c',
            'studio' => 'visible',
            'label' => 'LBL_ETAPAS',
          ),
        ),
      ),
      'lbl_editview_panel1' => 
      array (
        0 => 
        array (
          0 => 
          array (
            'name' => 'nombre_empresa_c',
            'label' => 'LBL_NOMBRE_EMPRESA_C',
          ),
          1 => 'phone_work',
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'nit_empresa_c',
            'label' => 'LBL_NIT_EMPRESA_C',
          ),
          1 => 
          array (
            'name' => 'email_empresa_c',
            'label' => 'LBL_EMAIL_EMPRESA_C',
          ),
        ),
        2 => 
        array (
          0 => 
          array (
            'name' => 'nombre_contacto_c',
            'label' => 'LBL_NOMBRE_CONTACTO_C',
          ),
          1 => 
          array (
            'name' => 'direccion_empresa_c',
            'label' => 'LBL_DIRECCION_EMPRESA_C',
          ),
        ),
      ),
      'LBL_PANEL_ASSIGNMENT' => 
      array (
        0 => 
        array (
          0 => 'refered_by',
          1 => 
          array (
            'name' => 'campaign_name',
            'label' => 'LBL_CAMPAIGN',
          ),
        ),
        1 => 
        array (
          0 => 
          array (
            'name' => 'assigned_user_name',
            'label' => 'LBL_ASSIGNED_TO',
          ),
        ),
      ),
    ),
  ),
);
;
?>

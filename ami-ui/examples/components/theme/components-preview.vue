<style lang="scss">
.component-preview {
  padding-right: 10px;
  &:last-of-type {
    padding-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
  }
  .demo-item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .demo-line {
    margin: 15px 0;
  }

  .ami-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .ami-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .ami-avatar:not(:last-child) {
    margin-right: 20px;
  }

  .avatar-demo {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Button</h4>
    <ami-row class="demo-line">
      <ami-button>Default</ami-button>
      <ami-button type="primary">Primary</ami-button>
      <ami-button type="success">Success</ami-button>
      <ami-button type="info">Info</ami-button>
      <ami-button type="warning">Warning</ami-button>
      <ami-button type="danger">Danger</ami-button>
    </ami-row>
    <ami-row class="demo-line">
      <ami-button plain>Plain</ami-button>
      <ami-button plain type="primary">Primary</ami-button>
      <ami-button plain type="success">Success</ami-button>
      <ami-button plain type="info">Info</ami-button>
      <ami-button plain type="warning">Warning</ami-button>
      <ami-button plain type="danger">Danger</ami-button>
    </ami-row>
    <ami-row class="demo-line">
      <ami-button round>Round</ami-button>
      <ami-button round type="primary">Primary</ami-button>
      <ami-button round type="success">Success</ami-button>
      <ami-button round type="info">Info</ami-button>
      <ami-button round type="warning">Warning</ami-button>
      <ami-button round type="danger">Danger</ami-button>
    </ami-row>
    <ami-row class="demo-line">
      <ami-button circle icon="ami-icon-search"></ami-button>
      <ami-button circle icon="ami-icon-edit" type="primary"></ami-button>
      <ami-button circle icon="ami-icon-check" type="success"></ami-button>
      <ami-button circle icon="ami-icon-message" type="info"></ami-button>
      <ami-button circle icon="ami-icon-star-off" type="warning"></ami-button>
      <ami-button circle icon="ami-icon-delete" type="danger"></ami-button>
    </ami-row>
    <ami-row class="demo-line">
      <ami-button>Default</ami-button>
      <ami-button size="medium">Medium</ami-button>
      <ami-button size="small">Small</ami-button>
      <ami-button size="mini">Mini</ami-button>
    </ami-row>
    <h4>Radio</h4>
    <ami-row class="demo-line">
      <ami-radio v-model="radio" label="1">Option A</ami-radio>
      <ami-radio v-model="radio" label="2">Option B</ami-radio>
    </ami-row>
    <ami-row class="demo-line">
      <ami-radio-group v-model="radio1">
        <ami-radio-button label="New York"></ami-radio-button>
        <ami-radio-button label="Washington"></ami-radio-button>
        <ami-radio-button label="Los Angeles"></ami-radio-button>
        <ami-radio-button label="Chicago"></ami-radio-button>
      </ami-radio-group>
    </ami-row>
    <ami-row class="demo-line">
      <ami-radio v-model="radio2" border label="1">Option A</ami-radio>
      <ami-radio v-model="radio2" border label="2">Option B</ami-radio>
    </ami-row>
    <h4>Checkbox</h4>
    <ami-row class="demo-line">
      <ami-checkbox v-model="checked">Option</ami-checkbox>
    </ami-row>
    <ami-row class="demo-line">
      <ami-checkbox-group v-model="checked1">
        <ami-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :key="city" :label="city">
          {{ city }}
        </ami-checkbox-button>
      </ami-checkbox-group>
    </ami-row>
    <ami-row class="demo-line">
      <ami-checkbox v-model="checked2" border label="Option1"></ami-checkbox>
    </ami-row>
    <h4>Input</h4>
    <ami-row style="width: 180px">
      <ami-input v-model="input" placeholder="Please input"></ami-input>
    </ami-row>
    <h4>InputNumber</h4>
    <ami-row>
      <ami-input-number v-model="inputNumber" :max="10" :min="1"></ami-input-number>
    </ami-row>
    <h4>Select</h4>
    <ami-row>
      <ami-select v-model="selectValue" placeholder="Select">
        <ami-option
            v-for="item in selectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></ami-option>
      </ami-select>
    </ami-row>
    <h4>Cascader</h4>
    <ami-row>
      <ami-cascader v-model="cascaderValue" :options="cascadeOptions"></ami-cascader>
    </ami-row>
    <h4>Switch</h4>
    <ami-row>
      <ami-switch v-model="switchValue"></ami-switch>
      <ami-switch
          style="margin-left: 40px"
          v-model="switchValue"
          active-text="Pay by month"
          inactive-text="Pay by year">
      </ami-switch>
    </ami-row>
    <h4>Slider</h4>
    <ami-row style="width: 380px">
      <ami-slider v-model="slider"></ami-slider>
    </ami-row>
    <h4>DatePicker</h4>
    <ami-row>
      <ami-date-picker v-model="datePicker" type="date"></ami-date-picker>
    </ami-row>
    <h4>Rate</h4>
    <ami-row>
      <ami-rate v-model="rate" class="demo-line"></ami-rate>
      <ami-rate
          class="demo-line"
          v-model="rate"
          show-score
          text-color="#ff9900"
          score-template="{value} points">
      </ami-rate>
    </ami-row>
    <h4>Transfer</h4>
    <ami-row>
      <ami-transfer v-model="transfer" :data="transferData" filterable>
        <ami-button slot="left-footer" class="transfer-footer" size="small">Operation</ami-button>
        <ami-button slot="right-footer" class="transfer-footer" size="small">Operation</ami-button>
      </ami-transfer>
    </ami-row>
    <h4>Table</h4>
    <ami-row>
      <ami-table :data="tableData" style="width: 70%">
        <ami-table-column label="Date" prop="date" width="180"></ami-table-column>
        <ami-table-column label="Name" prop="name" width="180"></ami-table-column>
        <ami-table-column label="Address" prop="address"></ami-table-column>
      </ami-table>
    </ami-row>
    <h4>Tag</h4>
    <ami-row>
      <ami-tag class="demo-item" closable>Tag One</ami-tag>
      <ami-tag class="demo-item" closable type="success">Tag Two</ami-tag>
      <ami-tag class="demo-item" closable type="info">Tag Three</ami-tag>
      <ami-tag class="demo-item" closable type="warning">Tag Four</ami-tag>
      <ami-tag class="demo-item" closable type="danger">Tag Five</ami-tag>
    </ami-row>
    <h4>Progress</h4>
    <ami-row style="width: 380px">
      <ami-progress :percentage="20"></ami-progress>
      <ami-progress :percentage="60" status="exception"></ami-progress>
      <ami-progress :percentage="100" status="success"></ami-progress>
    </ami-row>
    <h4>Tree</h4>
    <ami-row style="width: 380px">
      <ami-tree :data="treeData" :props="defaultTreeProps"></ami-tree>
    </ami-row>
    <h4>Pagination</h4>
    <ami-row>
      <ami-pagination :total="1000" layout="prev, pager, next"></ami-pagination>
    </ami-row>
    <h4>Badge</h4>
    <ami-row>
      <ami-badge :value="12" class="demo-item">
        <ami-button size="small">comments</ami-button>
      </ami-badge>
      <ami-badge :value="3" class="demo-item">
        <ami-button size="small">replies</ami-button>
      </ami-badge>
      <ami-badge :value="1" class="demo-item" type="primary">
        <ami-button size="small">comments</ami-button>
      </ami-badge>
      <ami-badge :value="2" class="demo-item" type="warning">
        <ami-button size="small">replies</ami-button>
      </ami-badge>
    </ami-row>
    <h4>Alert</h4>
    <ami-row style="width: 380px;">
      <ami-alert class="demo-item" show-icon title="success alert" type="success"></ami-alert>
      <ami-alert class="demo-item" close-text="Gotcha" show-icon title="info alert" type="info"></ami-alert>
      <ami-alert class="demo-item" show-icon title="warning alert" type="warning"></ami-alert>
      <ami-alert
          class="demo-item"
          title="error alert"
          type="error"
          description="more text description"
          show-icon>
      </ami-alert>
    </ami-row>
    <h4>Loading</h4>
    <ami-row>
      <ami-table v-loading="true" :data="tableData" style="width: 90%">
        <ami-table-column label="Date" prop="date" width="180"></ami-table-column>
        <ami-table-column label="Name" prop="name" width="180"></ami-table-column>
        <ami-table-column label="Address" prop="address"></ami-table-column>
      </ami-table>
    </ami-row>
    <h4>Message</h4>
    <ami-row>
      <div class="demo-item ami-message ami-message--success ami-message-fade-leave-active ami-message-fade-leave-to"
           role="alert" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i
          class="ami-message__icon ami-icon-success"></i>
        <p class="ami-message__content">Congrats, this is a success message.</p><!----></div>
      <div class="demo-item ami-message ami-message--warning ami-message-fade-leave-active ami-message-fade-leave-to"
           role="alert" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i
          class="ami-message__icon ami-icon-warning"></i>
        <p class="ami-message__content">Warning, this is a warning message.</p><!----></div>
      <div class="demo-item ami-message ami-message--info ami-message-fade-leave-active ami-message-fade-leave-to"
           role="alert" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i
          class="ami-message__icon ami-icon-info"></i>
        <p class="ami-message__content">This is a message.</p><!----></div>
      <div
          class="demo-item ami-message ami-message--error is-closable ami-message-fade-leave-active ami-message-fade-leave-to"
          role="alert" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i
          class="ami-message__icon ami-icon-error"></i>
        <p class="ami-message__content">Oops, this is a error message.</p><i
            class="ami-message__closeBtn ami-icon-close"></i></div>
    </ami-row>
    <h4>MessageBox</h4>
    <ami-row>
      <div class="ami-message-box">
        <div class="ami-message-box__header">
          <div class="ami-message-box__title"><!----><span>Warning</span></div>
          <button aria-label="Close" class="ami-message-box__headerbtn" type="button"><i
              class="ami-message-box__close ami-icon-close"></i></button>
        </div>
        <div class="ami-message-box__content">
          <div class="ami-message-box__status ami-icon-warning"></div>
          <div class="ami-message-box__message"><p>This will permanently delete the file. Continue?</p></div>
          <div class="ami-message-box__input" style="display: none;">
            <div class="ami-input"><!----><input autocomplete="off" class="ami-input__inner" placeholder="" type="text">
              <!----><!----><!----></div>
            <div class="ami-message-box__errormsg" style="visibility: hidden;"></div>
          </div>
        </div>
        <div class="ami-message-box__btns">
          <button class="ami-button ami-button--default ami-button--small" type="button"><!----><!----><span>
          Cancel
        </span></button>
          <button class="ami-button ami-button--default ami-button--small ami-button--primary " type="button"><!---->
            <!----><span>
          OK
        </span></button>
        </div>
      </div>
    </ami-row>
    <h4>Notification</h4>
    <ami-row>
      <div class="ami-notification right" role="alert" style="position: relative; left: 0;"><!---->
        <div class="ami-notification__group"><span class="ami-notification__title">Notification</span>
          <div class="ami-notification__content">
            <div>This is a message</div>
          </div>
          <div class="ami-notification__closeBtn ami-icon-close"></div>
        </div>
      </div>
    </ami-row>
    <h4>Menu</h4>
    <ami-row>
      <ami-menu :default-active="menu" class="ami-menu-demo" mode="horizontal">
        <ami-menu-item index="1">Processing Center</ami-menu-item>
        <ami-submenu index="2">
          <template slot="title">Workspace</template>
          <ami-menu-item index="2-1">item one</ami-menu-item>
          <ami-menu-item index="2-2">item two</ami-menu-item>
          <ami-menu-item index="2-3">item three</ami-menu-item>
          <ami-submenu index="2-4">
            <template slot="title">item four</template>
            <ami-menu-item index="2-4-1">item one</ami-menu-item>
            <ami-menu-item index="2-4-2">item two</ami-menu-item>
            <ami-menu-item index="2-4-3">item three</ami-menu-item>
          </ami-submenu>
        </ami-submenu>
        <ami-menu-item disabled index="3">Info</ami-menu-item>
        <ami-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">Orders</a>
        </ami-menu-item>
      </ami-menu>
      <ami-menu
          default-active="2"
          class="demo-line"
      >
        <ami-submenu index="1">
          <template slot="title">
            <i class="ami-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <ami-menu-item-group title="Group One">
            <ami-menu-item index="1-1">item one</ami-menu-item>
            <ami-menu-item index="1-2">item one</ami-menu-item>
          </ami-menu-item-group>
          <ami-menu-item-group title="Group Two">
            <ami-menu-item index="1-3">item three</ami-menu-item>
          </ami-menu-item-group>
          <ami-submenu index="1-4">
            <template slot="title">item four</template>
            <ami-menu-item index="1-4-1">item one</ami-menu-item>
          </ami-submenu>
        </ami-submenu>
        <ami-menu-item index="2">
          <i class="ami-icon-menu"></i>
          <span>Navigator Two</span>
        </ami-menu-item>
        <ami-menu-item disabled index="3">
          <i class="ami-icon-document"></i>
          <span>Navigator Three</span>
        </ami-menu-item>
        <ami-menu-item index="4">
          <i class="ami-icon-setting"></i>
          <span>Navigator Four</span>
        </ami-menu-item>
      </ami-menu>
    </ami-row>
    <h4>Tabs</h4>
    <ami-row>
      <ami-tabs v-model="tab" class="demo-item">
        <ami-tab-pane label="User" name="first">User</ami-tab-pane>
        <ami-tab-pane label="Config" name="second">Config</ami-tab-pane>
        <ami-tab-pane label="Role" name="third">Role</ami-tab-pane>
        <ami-tab-pane label="Task" name="fourth">Task</ami-tab-pane>
      </ami-tabs>
      <ami-tabs class="demo-item" type="card">
        <ami-tab-pane label="User">User</ami-tab-pane>
        <ami-tab-pane label="Config">Config</ami-tab-pane>
        <ami-tab-pane label="Role">Role</ami-tab-pane>
        <ami-tab-pane label="Task">Task</ami-tab-pane>
      </ami-tabs>
    </ami-row>
    <h4>Dialog</h4>
    <ami-row>
      <div aria-label="Tips" aria-modal="true" class="ami-dialog" role="dialog" style="margin: 0">
        <div class="ami-dialog__header"><span class="ami-dialog__title">Tips</span>
          <button aria-label="Close" class="ami-dialog__headerbtn" type="button"><i
              class="ami-dialog__close ami-icon ami-icon-close"></i></button>
        </div>
        <div class="ami-dialog__body"><span>This is a message</span></div>
        <div class="ami-dialog__footer"><span class="dialog-footer"><button class="ami-button ami-button--default"
                                                                            type="button"><!---->
          <!----><span>Cancel</span></button> <button class="ami-button ami-button--primary" type="button"><!---->
          <!----><span>Confirm</span></button></span></div>
      </div>
    </ami-row>
    <h4>Tooltip</h4>
    <ami-row>
      <div class="ami-tooltip__popper is-dark" role="tooltip"
           style="position: relative; width: 40px;text-align: center;" x-placement="top">Dark
        <div class="popper__arrow" x-arrow=""></div>
      </div>
      <div class="ami-tooltip__popper is-light" role="tooltip"
           style="margin-top: 10px;position: relative; width: 40px;text-align: center;" x-placement="top">Light
        <div class="popper__arrow" x-arrow=""></div>
      </div>
    </ami-row>
    <h4>Popover</h4>
    <ami-row>
      <div id="ami-popover-2936" aria-hidden="true" class="ami-popover ami-popper ami-popover--plain" role="tooltip"
           style="width: 200px; position: relative; " tabindex="0" x-placement="top">
        <div class="ami-popover__title">Title</div>
        this is content, this is content, this is content
        <div class="popper__arrow" x-arrow=""></div>
      </div>
    </ami-row>
    <h4>Card</h4>
    <ami-row>
      <ami-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </ami-card>
    </ami-row>
    <h4>Carousel</h4>
    <ami-row>
      <ami-carousel height="150px">
        <ami-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </ami-carousel-item>
      </ami-carousel>
    </ami-row>
    <h4>Collapse</h4>
    <ami-row>
      <ami-collapse v-model="collapse">
        <ami-collapse-item name="1" title="Consistent">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and
            habits that the users are used to;
          </div>
        </ami-collapse-item>
        <ami-collapse-item name="2" title="Feedback">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and
            interactive effects;
          </div>
        </ami-collapse-item>
      </ami-collapse>
    </ami-row>
    <h4>Avatar</h4>
    <ami-row class="demo-line avatar-demo">
      <ami-avatar icon="ami-icon-user-solid"/>
      <ami-avatar> avatar</ami-avatar>
      <ami-avatar :src="avatarData.url" fit="contain" shape="square"></ami-avatar>
      <ami-avatar size="large"> large</ami-avatar>
      <ami-avatar size="medium"> medium</ami-avatar>
      <ami-avatar size="small"> small</ami-avatar>
    </ami-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: 'Washington',
      radio2: '1',
      checked: true,
      checked1: ['Shanghai'],
      checked2: true,
      input: 'Element',
      inputNumber: 1,
      selectOptions: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      selectValue: '',
      cascadeOptions: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      cascaderValue: [],
      switchValue: true,
      slider: 28,
      datePicker: '',
      rate: null,
      transferData: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })(),
      transfer: [1, 4],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      menu: '1',
      tab: 'first',
      collapse: ['1'],
      treeData: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultTreeProps: {
        children: 'children',
        label: 'label'
      },
      avatarData: {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    };
  }
};
</script>

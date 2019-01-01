/*
 * @package    SussexDev_MultiStepModal
 * @copyright  Copyright (c) 2019 Scott Parsons
 * @license    https://github.com/ScottParsons/module-multistepmodal/blob/master/LICENSE.md
 * @version    1.0.0
 */

define([
    'jquery',
    'Magento_Ui/js/modal/modal-component',
], function ($, Modal) {
    'use strict';

    return Modal.extend({

        /**
         * Close Multi-step Modal
         */
        closeMultiStepModal: function () {
            this.closeModal();
        }
    });
});

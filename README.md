# Magento 2 - Multi-step Modal Module

## Overview

A Magento 2 module demonstrating how to implement a frontend multi-step modal. Based on the Release Notes modal that commonly appears
in the admin panel after installing/upgrading the Magento application.

## Requirements

Magento Open Source (CE) 2.2.x

## Installation

Include the package.

```bash
$ composer require sussexdev/module-multistepmodal
```

Enable the module.

```bash
$ php bin/magento module:enable SussexDev_MultiStepModal
$ php bin/magento setup:upgrade
$ php bin/magento cache:clean
```

## Usage

Head to the ```/multistepmodal``` route and the modal will open automatically.

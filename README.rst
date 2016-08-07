Wheelie recipe
==============

.. image:: https://badge.fury.io/js/wheelie-recipe.svg
    :target: https://badge.fury.io/js/wheelie-recipe
    :alt: Package version

.. image:: https://travis-ci.org/palazzem/wheelie-recipe.svg
    :target: https://travis-ci.org/palazzem/wheelie-recipe
    :alt: Build Status

.. image:: https://david-dm.org/palazzem/wheelie-recipe.svg
    :target: https://david-dm.org/palazzem/wheelie-recipe
    :alt: Dependency Status

.. image:: https://david-dm.org/palazzem/wheelie-recipe/dev-status.svg
    :target: https://david-dm.org/palazzem/wheelie-recipe#info=devDependencies
    :alt: Dev Dependency Status

A generic recipe for the `Wheelie`_ task registry.

.. _Wheelie: https://github.com/palazzem/wheelie

Getting started
---------------

To use this recipe, add the following configuration on your ``gulpfile.js``:

.. code-block:: javascript

    var gulp = require('gulp');

    var Wheelie = require('wheelie');
    var recipe = require('wheelie-recipe');

    var wheelie = new Wheelie();
    wheelie.add(recipe);
    wheelie.build();

Disable components
~~~~~~~~~~~~~~~~~~

This recipe starts automatically the ``browser-sync`` task; if you want to disable
it because you're using another tool or a web framework, add this configuration:

.. code-block:: javascript

    var wheelie = new Wheelie();
    wheelie.add(recipe);
    wheelie.disable('browser-sync');
    wheelie.build();

Components
----------

The following tasks are exported:

* ``assets``
* ``browser-sync``
* ``jshint``
* ``sass``
* ``templates``
* ``uglify``
* ``watch``
* ``build``

All tasks handle the ``--production`` flag so to create a production ready build, launch
the command::

    $ gulp build --production

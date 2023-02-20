import gcp from '../assets/svg/skills/html.svg'
import html from '../assets/svg/skills/html.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import docker from '../assets/svg/skills/docker.svg'
import adobeXd from '../assets/svg/skills/adobe-xd.svg'
import afterEffects from '../assets/svg/skills/after-effects.svg'
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import nuxtJS from '../assets/svg/skills/nuxtJS.svg'
import react from '../assets/svg/skills/react.svg'
import svelte from '../assets/svg/skills/svelte.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vue from '../assets/svg/skills/vue.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import bulma from '../assets/svg/skills/bulma.svg'
import capacitorjs from '../assets/svg/skills/capacitorjs.svg'
import coffeescript from '../assets/svg/skills/coffeescript.svg'
import memsql from '../assets/svg/skills/memsql.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import postgresql from '../assets/svg/skills/postgresql.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import vitejs from '../assets/svg/skills/vitejs.svg'
import vuetifyjs from '../assets/svg/skills/vuetifyjs.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import dart from '../assets/svg/skills/dart.svg'
import go from '../assets/svg/skills/go.svg'
import java from '../assets/svg/skills/java.svg'
import julia from '../assets/svg/skills/julia.svg'
import kotlin from '../assets/svg/skills/kotlin.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import ruby from '../assets/svg/skills/ruby.svg'
import swift from '../assets/svg/skills/swift.svg'
import adobeaudition from '../assets/svg/skills/adobeaudition.svg'
import aws from '../assets/svg/skills/aws.svg'
import deno from '../assets/svg/skills/deno.svg'
import django from '../assets/svg/skills/django.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import gimp from '../assets/svg/skills/gimp.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import lightroom from '../assets/svg/skills/lightroom.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import nginx from '../assets/svg/skills/nginx.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import premierepro from '../assets/svg/skills/premierepro.svg'
import pytorch from '../assets/svg/skills/pytorch.svg'
import selenium from '../assets/svg/skills/selenium.svg'
import strapi from '../assets/svg/skills/strapi.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'
import webix from '../assets/svg/skills/webix.svg'
import wordpress from '../assets/svg/skills/wordpress.svg'
import azure from '../assets/svg/skills/azure.svg'
import blender from '../assets/svg/skills/blender.svg'
import fastify from '../assets/svg/skills/fastify.svg'
import figma from '../assets/svg/skills/figma.svg'
import flutter from '../assets/svg/skills/flutter.svg'
import haxe from '../assets/svg/skills/haxe.svg'
import ionic from '../assets/svg/skills/ionic.svg'
import markdown from '../assets/svg/skills/markdown.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import picsart from '../assets/svg/skills/picsart.svg'
import sketch from '../assets/svg/skills/sketch.svg'
import unity from '../assets/svg/skills/unity.svg'
import wolframalpha from '../assets/svg/skills/wolframalpha.svg'

import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'adobe xd':
            return adobeXd;
        case 'adobe audition':
        case 'python':
            return python;
        case 'css':
            return css;
            case 'illustrator':
            return illustrator;
        case 'photoshop':
            return photoshop;


        case 'javascript':
            return javascript;
        case 'typescript':
            return typescript;
        case 'next js':
            return nextJS;

        case 'react':
            return react;

        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;

        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;

        case 'tailwind':
            return tailwind;

        case 'aws':
            return aws;

        case 'django':
            return django;
        case 'firebase':
            return firebase;

        case 'git':
            return git;

        case 'materialui':
            return materialui;


        case 'selenium':
            return selenium;

        case 'wordpress':
            return wordpress;

        case 'blender':
            return blender;
        case 'unity':
            return unity;
        case 'figma':
            return figma;

        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;

        case 'sketch':
            return sketch;

        case 'canva':
            return canva;
        default:
            break;
    }
}

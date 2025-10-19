pipeline {
     agent any
    //agent { myDocker { image 'node:14-alpine' } }
     

tools {
        nodejs 'myNodeJs'
    }
    stages {
        stage('Install Docker'){
            steps {
                script {
                    sh 'docker --version'
                    sh 'sudo apt update'
                    sh 'sudo apt install docker.io'
                    sh 'docker --version'
                }
            }
        }
        stage('Build') {
          
            steps {
                echo 'Building...'

                script{
                    sh 'npm install'
                } 
                script{
                    sh 'npm run build'
                }
            }
        }
    }
}

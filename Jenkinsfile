pipeline {
    agent any

tools {
        nodejs 'myNodeJs'
    }
    stages {
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
        stage('Test') {
            steps {
                echo 'Testing...'
                script{
                    sh 'npm test'
                }
            }
        }
    }
}

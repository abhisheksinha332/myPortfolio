pipeline {
    //  agent any
    agent { docker { image 'node:14-alpine' } }
     

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
    }
}

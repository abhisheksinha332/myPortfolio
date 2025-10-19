pipeline {
     agent any
    //agent { myDocker { image 'node:14-alpine' } }
     

tools {
        nodejs 'myNodeJs'
    }
    stages {
        stage('Build') {
            agent { docker { image 'node:22.20.0-alpine3.22' } }
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

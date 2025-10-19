pipeline {
    // agent any
    //agent { myDocker { image 'node:14-alpine' } }
     agent { docker { image 'node:22.20.0-alpine3.22' } }

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

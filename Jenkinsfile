pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                script 'npm install'
                script 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                script 'npm test'
            }
        }
    }
}

pipeline {
    agent any
    tools {
        maven 'Maven-3.8.4'
    }

    stages {
        stage("Build") {
            steps {
                sh 'cd employee-system-api'
                sh 'mvn clean install -DskipTests'
            }
        }
        stage("Test") {
            steps {
                sh 'cd employee-system-api'
                sh 'mvn test'
            }
        }
        stage("Docker Build") {
            steps {
                sh 'docker-compose up'
            }
        }
    }
}

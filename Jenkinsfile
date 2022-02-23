pipeline {
    agent any
    tools {
        maven 'Maven-3.8.4'
    }

    stages {
        stage("Build") {
            steps {
                sh 'mvn -f employee-system-api/pom.xml clean install -DskipTests'
 
            }
        }
        stage("Test") {
            steps {
                sh 'mvn -f employee-system-api/pom.xml test'
                
            }
        }
        stage("Docker Build") {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        always {
            sh "docker-compose down -v"
        }
    }
}
